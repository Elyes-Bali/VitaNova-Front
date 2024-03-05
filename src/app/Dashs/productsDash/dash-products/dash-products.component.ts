import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/components/products.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-dash-products',
  templateUrl: './dash-products.component.html',
  styleUrls: ['./dash-products.component.css']
})
export class DashProductsComponent implements OnInit{
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
 
  searchTerm: string = ''; // Holds the search term entered by the user
  products: Products[] = []; // Holds the list of all products
  filteredProducts: Products[] = [];
 
  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        this.filterProducts(); // Call filterProducts method after getting products
      },
      (error: any) => {
        console.error('Failed to retrieve products:', error);
      }
    );
  }

  filterProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter(product =>
      (product?.prodName?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (product?.typeProd?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (product?.price?.toString()?.includes(this.searchTerm.toLowerCase().trim()) || false) ||
      (product?.descriptionP?.toLowerCase()?.includes(this.searchTerm.toLowerCase().trim()) || false)
    );
  }
  
}
