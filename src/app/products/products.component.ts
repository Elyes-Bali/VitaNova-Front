import { Component } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../components/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  newProduct: Products = {
    prodName: '',
    typeProd: '',
    price: 0,
    quantityP:0,
    descriptionP: '',
   
  };

  constructor(private productsService: ProductsService,private router: Router,) {}

  addProduct() {
    this.productsService.addProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        this.logImageUrl();
        // Reset the form or perform any additional logic
        this.newProduct = {
          prodName: '',
          typeProd: '',
          price: 0,
          quantityP:0,
          descriptionP: '',
        };
      },
      (error) => {
        console.error('Error adding Product:', error);
        // Handle the error or display an error message
      }
    );
    this.router.navigate(['/dashProds']);
  }
  onFileSelected(event: any) {
    this.newProduct.imageUrl = event.target.files[0];
  }
  logImageUrl() {
    console.log('Image URL:', this.newProduct.imageUrl);
  }
}
