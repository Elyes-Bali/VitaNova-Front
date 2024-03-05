import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ProductsComponent } from '../products/products.component';
import { Products } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private baseUrl = "http://localhost:8085/api/product/";
  // constructor(private http: HttpClient) { }
  readonly PRODUCT_API_URL = 'http://localhost:8085/vita/product/';
  constructor(private httpclient: HttpClient) { }
  
  addProduct(product: Products) {
    return this.httpclient.post(this.PRODUCT_API_URL + 'addprod', product);
  }
  getAllProducts(){
    return this.httpclient.get<Products[]>(this.PRODUCT_API_URL+'getallprods');
  }
  editProduct(id: number ,product: Products) {
    const url = this.PRODUCT_API_URL + 'update/' + product.idProducts; // Assuming there's an "id" property in the Psychologue object
    return this.httpclient.put(url, product);
  }

  getproductId(id: number): Observable<Products> {
    return this.httpclient.get<Products>(`${this.PRODUCT_API_URL}getproductId/${id}`);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.PRODUCT_API_URL}deleteprod/${id}`;
    return this.httpclient.delete<void>(url);
  }
}
