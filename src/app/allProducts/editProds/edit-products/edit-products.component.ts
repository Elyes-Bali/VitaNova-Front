import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/components/products.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {
  id: number=0;
  product: Products = new Products();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    

    this.productService.getproductId(this.id).subscribe(data=>{
      this.product= data;
    })
  }

  UpdateProduct(): void {
    this.productService.editProduct(this.id, this.product).subscribe(() => {
      // Redirect to the psychologue details page or another appropriate location after update
      this.router.navigate(['/dashProds/']);
    });
  }
}
