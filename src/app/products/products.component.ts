import { Component } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../components/products.service';

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
    descriptionP: ''
  };

  constructor(private productsService: ProductsService) {}

  addProduct() {
    this.productsService.addProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        // Reset the form or perform any additional logic
        this.newProduct = {
          prodName: '',
          typeProd: '',
          price: 0,
          descriptionP: '',
        };
      },
      (error) => {
        console.error('Error adding Product:', error);
        // Handle the error or display an error message
      }
    );
  }
}
