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
  sortOption: string = 'name';
  addToggle()
  {
    this.status = !this.status;       
  }
 
  searchTerm: string = ''; // Holds the search term entered by the user
  products: Products[] = []; // Holds the list of all products
  filteredProducts: Products[] = [];
  pageSize = 8; // Number of products per page
  currentPage = 1; // Current page
  totalPages = 0; // Total number of pages
  pages: number[] = []; // Array of page numbers
  pagedProducts: Products[] = []; 
  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        this.filterProducts(); // Call filterProducts method after getting products
        this.updatePagination();
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
  sortProducts(): void {
    switch (this.sortOption) {
      case 'name':
        this.pagedProducts.sort((a, b) => (a.prodName && b.prodName) ? a.prodName.localeCompare(b.prodName) : 0);
        break;
      case 'type':
        this.pagedProducts.sort((a, b) => (a.typeProd && b.typeProd) ? a.typeProd.localeCompare(b.typeProd) : 0);
        break;
      case 'price':
        this.pagedProducts.sort((a, b) => (a.price && b.price) ? a.price - b.price : 0);
        break;
      case 'highestPrice':
        this.pagedProducts.sort((a, b) => (a.price && b.price) ? b.price - a.price : 0);
        break;
      // Add cases for sorting by different characteristics
      default:
        // Default sorting by name
        this.pagedProducts.sort((a, b) => (a.prodName && b.prodName) ? a.prodName.localeCompare(b.prodName) : 0);
        break;
    }
  }
  
  
  
  
  updatePagination(): void {
    // Calculate total number of pages
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);

    // Generate an array of page numbers
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }

    // Update pagedProducts
    this.goToPage(1);
  }

  goToPage(page: number): void {
    // Update currentPage
    this.currentPage = page;

    // Calculate starting index of products for the current page
    const startIndex = (page - 1) * this.pageSize;

    // Slice the products array to get products for the current page
    this.pagedProducts = this.filteredProducts.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage(): void {
    // Go to previous page
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    // Go to next page
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
  
}
