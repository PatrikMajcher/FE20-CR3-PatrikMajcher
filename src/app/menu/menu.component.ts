import { Component } from '@angular/core';
import { IProducts } from '../i-products';
import { pizzaProducts} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products: Array<IProducts> = pizzaProducts;

  constructor(private cartService: CartService) {}

  

  addItemToCart(product: IProducts) {
    this.cartService.addToCart(product);
    
  }

}
