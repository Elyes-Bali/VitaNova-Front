import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/cart.service';
import { Cart } from 'src/app/models/products';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{
  cartItems: Cart[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getAllCartItems().subscribe(data => {
      this.cartItems = data;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, curr) => acc + (curr.total ?? 0), 0);
  }
  removeItemFromCart(item: Cart) {
    if (item.idCart !== undefined) {
      if (confirm('Are you sure you want to remove this item from the cart?')) {
        this.cartService.deleteProductCart(item.idCart).subscribe(() => {
          // Remove the item from the cartItems array
          this.cartItems = this.cartItems.filter(cartItem => cartItem.idCart !== item.idCart);
          this.calculateTotal();
        }, error => {
          console.error('Error removing item from cart:', error);
          // Handle error (e.g., display an error message)
        });
      }
    } else {
      console.error('idCart is undefined for the cart item:', item);
      // Handle error (e.g., display an error message)
    }
  }
  
}
