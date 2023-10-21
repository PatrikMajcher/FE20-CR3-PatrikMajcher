import { Component, OnInit } from '@angular/core';
import { IProducts } from '../i-products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 cart : Array<IProducts> = [];


 constructor(private CS: CartService){}


  ngOnInit(): void {
      this.cart = this.CS.getCart();
  }

  serviceFee(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0) * 0.1;
  }

  totalPrice(): number {
    const totalWithoutServiceFee = this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const serviceFee = this.serviceFee();
    return totalWithoutServiceFee + serviceFee;
  }

  totalPriceWithDiscount(): number {
    const total = this.totalPrice();
    return total > 40 ? total * 0.85 : total;
  }

  incrementQuantity(product: IProducts) {
    if (product.quantity < product.maxQuantity) {
      product.quantity++;
    }
  }

  decrementQuantity(product: IProducts) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }


  removeProduct(product: IProducts) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
