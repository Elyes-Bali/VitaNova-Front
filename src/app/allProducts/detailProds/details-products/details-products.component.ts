import { Component } from '@angular/core';
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
      const cartItem: Cart = {
        ownerId: this.product.idProducts, // Assuming ownerId represents the product ID
        products: this.product.prodName,
        quantity: this.quantity, // Pass the selected quantity
        total: (this.product.price ?? 0) * this.quantity // Calculate total based on price and quantity
      };
  
      this.cartService.addProduct(cartItem).subscribe(response => {
        console.log('Product added to cart successfully:', response);
        // Add any additional logic here (e.g., display a success message)
      }, error => {
        console.error('Error adding product to cart:', error);
        // Handle error (e.g., display an error message)
      });
    } else {
      console.error('Price is undefined for the product:', this.product);
    }
  }  
}
