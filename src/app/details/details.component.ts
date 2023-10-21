import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { IProducts } from '../i-products';
import { pizzaProducts} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  product : IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute,private cartService: CartService) {}

  addItemToCart(product: IProducts) {
    this.cartService.addToCart(product);
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['details'];
      this.product = this.getProductById(this.id);
    });
  }

  private getProductById(id: number): IProducts {
    console.log('Searching for product with id:', id);
  
    if (id >= 1 && id <= 6) {
      const product1 = pizzaProducts.find((product) => product.id === id);
      if (product1) {
        console.log('Product found in featuresProducts:', product1);
        return product1;
      }
    }

    console.log('Product not found.');
    return {} as IProducts;
  }


}
