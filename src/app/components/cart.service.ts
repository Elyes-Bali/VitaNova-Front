import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly PRODUCT_API_URL = 'http://localhost:8085/vita/cart/';
  constructor(private httpclient: HttpClient) { }
  addProduct(cart: Cart) {
    return this.httpclient.post(this.PRODUCT_API_URL + 'addtocart', cart);
  }

  getAllCartItems(){
    return this.httpclient.get<Cart[]>(this.PRODUCT_API_URL+'getallcart');
  }

  deleteProductCart(id: number): Observable<void> {
    const url = `${this.PRODUCT_API_URL}deletecart/${id}`;
    return this.httpclient.delete<void>(url);
  }
}
