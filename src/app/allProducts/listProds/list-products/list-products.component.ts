import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/components/products.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: Products[] = [];
 
  
  constructor(private productService: ProductsService,private router: Router  ) { }

  ngOnInit(): void {
    
    console.log('ListPsychologueComponent initialized');

    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      
      (data) => {
        this.products = data;
      },
      (error: any) => {
        console.error('Failed to retrieve products:', error);
      }
      
    );
    console.log('listProdsComponent initialized');
  }
}
