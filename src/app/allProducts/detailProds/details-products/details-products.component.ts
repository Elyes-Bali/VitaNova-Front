import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { CartService } from 'src/app/components/cart.service';
import { ProductsService } from 'src/app/components/products.service';
import { Cart, Products } from 'src/app/models/products';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent {
  id: number=0;
  product: Products = new Products();
  quantity: number = 1; // Default quantity is 1
 ownerId: number=0;
 isLoggedIn = false;
  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService,private storageService: StorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();

      this.ownerId = user.id;
    }
    // Retrieve userId from session storage
    // this.ownerId = window.sessionStorage.getItem('id') ? parseInt(window.sessionStorage.getItem('id')!) : 0;
    // console.log('Retrieved userId:', this.ownerId); 
    // Fetch product data
    this.productService.getproductId(this.id).subscribe(data => {
      console.log('Received product data:', data); // Log the received data
      this.product = data;
    }, error => {
      console.error('Error fetching product data:', error); // Log any errors
    });
  }

  addToCart() {
    // Check if userId is valid
    if (!isNaN(this.ownerId) && this.ownerId !== 0) {
      // Cart item object
      const cartItem: Cart = {
        ownerId: this.ownerId,
        products: this.product.prodName,
        quantity: this.quantity,
        total: (this.product.price ?? 0) * this.quantity
      };

      // Add to cart
      this.cartService.addToCart(this.ownerId, cartItem).subscribe(response => {
        console.log('Product added to cart successfully:', response);
        // Handle success
     const navigate = confirm('Product added to cart successfully. Do you want to view your cart?');
        if (navigate) {
          // Navigate to the cart page
          // Replace 'cart' with the actual route to your cart page
          window.location.href = '/cart';
        } else {
          // Continue shopping or any other action
          // You can implement additional logic here
        }
      }, error => {
        console.error('Error adding product to cart:', error);
        // Handle error (e.g., display an error message)
      });
    } else {
      console.log('Product addition to cart cancelled by the user.');
      // Optionally, you can add some logic here if the user cancels the action
    }
  
  }

   
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('productImage') productImage!: ElementRef;

  onMouseEnter(event: MouseEvent): void {
    const containerRect = this.imageContainer.nativeElement.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    const originX = (mouseX / containerRect.width) * 100;
    const originY = (mouseY / containerRect.height) * 100;
    this.productImage.nativeElement.style.transformOrigin = `${originX}% ${originY}%`;
  }

  onMouseLeave(): void {
    this.productImage.nativeElement.style.transformOrigin = 'center';
  }
}
