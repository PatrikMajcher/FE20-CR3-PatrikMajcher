import { Injectable } from '@angular/core';
import { IProducts } from './i-products';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cart : IProducts[] = [];

 
 
 constructor() {}

 show(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your item was added to the cart!',
    showConfirmButton: false,
    timer: 1500
  })
}


 
 addToCart(product: IProducts) {
  const existingProduct = this.cart.find((p) => p.name === product.name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    this.cart.push(product);
  }
  this.show();
}

getCart() {
  return this.cart;
}

calculateTotal() {
  return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

applyDiscount() {
  const total = this.calculateTotal();
  return total > 40 ? total * 0.85 : total;
}
}


