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
  currentPage = 1;
  itemsPerPage = 12;
  
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
  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  get paginatedProducts(): Products[][] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.chunkArray(this.products.slice(startIndex, startIndex + this.itemsPerPage), 4);
  }

  chunkArray(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
