import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/components/products.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent {
  id: number=0;
  product: Products = new Products();

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.getproductId(this.id).subscribe(data => {
      this.product = data;
    });
  }
}
