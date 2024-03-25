import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  this.productService.getproductId(this.id).subscribe(data => {
    console.log('Received product data:', data); // Log the received data
    this.product = data;
  }, error => {
    console.error('Error fetching product data:', error); // Log any errors
  });
    
  }
addToCart() {
  if (this.product.price !== undefined) {
    const confirmed = confirm('Are you sure you want to add this product to your cart?');
    if (confirmed) {
      const cartItem: Cart = {
        ownerId: this.product.idProducts, // Assuming ownerId represents the product ID
        products: this.product.prodName,
        quantity: this.quantity, // Pass the selected quantity
        total: (this.product.price ?? 0) * this.quantity // Calculate total based on price and quantity
      };

      this.cartService.addProduct(cartItem).subscribe(response => {
        console.log('Product added to cart successfully:', response);
        
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
  } else {
    console.error('Price is undefined for the product:', this.product);
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
