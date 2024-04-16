import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { CartService } from 'src/app/components/cart.service';
import { Cart } from 'src/app/models/products';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{
  cartItems: Cart[] = [];
  total: number = 0;
  isLoggedIn = false;
  currentUser: number=0;
  constructor(private storageService: StorageService,private cartService: CartService) { }

  ngOnInit(): void {
 
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.currentUser = user.id;
      this.loadCartItems(); 
    }
   
  }

  loadCartItems() {
    this.cartService.getCartByOwnerId(this.currentUser).subscribe(data => {
      this.cartItems = data;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    if (Array.isArray(this.cartItems)) {
      this.total = this.cartItems.reduce((acc, curr) => acc + (curr.total ?? 0), 0);
    } else {
      console.error('Cart items are not in an array:', this.cartItems);
    }
  }
  
  removeItemFromCart(item: Cart) {
    if (item.idCart !== undefined) {
      if (confirm('Are you sure you want to remove this item from the cart?')) {
        this.cartService.deleteProductCart(item.idCart).subscribe(() => {
          // Remove the item from the cartItems array
          this.cartItems = this.cartItems.filter(cartItem => cartItem.idCart !== item.idCart);
          this.calculateTotal();
        }, error => {
          console.error('Error removing item from cart:', error);
          // Handle error (e.g., display an error message)
        });
      }
    } else {
      console.error('idCart is undefined for the cart item:', item);
      // Handle error (e.g., display an error message)
    }
  }
  
}
