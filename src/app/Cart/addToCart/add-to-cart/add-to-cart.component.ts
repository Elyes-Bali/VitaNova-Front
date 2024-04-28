import { AfterViewInit, Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { StorageService } from 'src/app/_services/storage.service';
import { CartService } from 'src/app/components/cart.service';
import { Cart } from 'src/app/models/products';

declare var Stripe: any;

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit,AfterViewInit{
  cartItems: Cart[] = [];
  total: number = 0;
  isLoggedIn = false;
  currentUser: number=0;
  stripe: any;
  card: any;
  constructor(private storageService: StorageService,private cartService: CartService) {
    
   }

  ngOnInit(): void {
 
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.currentUser = user.id;
      this.loadCartItems(); 
    }
   
  }

  
  ngAfterViewInit(): void {
    // Initialize Stripe and mount the card element
    this.stripe = Stripe('pk_test_51P8W56E5EeInQmuIBM82Bq3Qq1rI824cmvHAL719OQq9c8UVNEFClDwOZIt6n0o8vxrYXq3EvytC2JCX6tz7IcEd00di7C1utN');
    const elements = this.stripe.elements();
    this.card = elements.create('card');
    this.card.mount('#card-element');
  }

  loadCartItems() {
    this.cartService.getCartByOwnerId(this.currentUser).subscribe(data => {
    
      const mergedCartItems: Cart[] = [];
      data.forEach(item => {
        if (item.quantity !== undefined && item.total !== undefined) {
          const existingItem = mergedCartItems.find(cartItem => cartItem.products === item.products);
          if (existingItem) {
           
            if (existingItem.quantity !== undefined) {
              existingItem.quantity += item.quantity;
            }
       
            if (existingItem.total !== undefined) {
              existingItem.total += item.total; 
            }
          } else {
            mergedCartItems.push(item); 
          }
        }
      });
  
      this.cartItems = mergedCartItems;
      this.calculateTotal();
    });
  }
  

  calculateTotal() {
    if (Array.isArray(this.cartItems)) {
      this.total = this.cartItems.reduce((acc, curr) => acc + (curr.total ?? 0), 0);
      // this.makePayment(this.total);
    } else {
      console.error('Cart items are not in an array:', this.cartItems);
    }
  }
  

  initiatePayment() {
    this.cartService.initiatePayment(this.currentUser).subscribe((clientSecret: string) => {
      console.log('Client secret received:', clientSecret);
      this.stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: this.card,
        },
      }).then((result: any) => {
        if (result.error) {
          console.error('Payment failed:', result.error.message);
        } else if (result.paymentIntent?.status === 'succeeded') {
          console.log('Payment succeeded!');
          // Perform further actions after successful payment
        }
      }).catch((error: any) => {
        console.error('Error making payment:', error);
      });
    }, (error: any) => {
      console.error('Error initiating payment:', error);
    });
  }
  



  

  removeItemFromCart(item: Cart) {
    if (item.idCart !== undefined) {
      if (confirm('Are you sure you want to remove this item from the cart?')) {
        this.cartService.deleteProductCart(item.idCart).pipe(
          switchMap(() => this.cartService.getCartByOwnerId(this.currentUser))
        ).subscribe(data => {
         
          this.cartItems = data;
          this.calculateTotal();
        }, error => {
          console.error('Error removing item from cart:', error);
        
        });
      }
    } else {
      console.error('idCart is undefined for the cart item:', item);
 
    }
  }
  
  
  
}
