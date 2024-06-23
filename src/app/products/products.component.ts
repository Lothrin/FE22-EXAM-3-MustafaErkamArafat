import { Component } from '@angular/core';
import { IProduct } from '../products.model';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: IProduct[];

  constructor(private cartService: CartService
  ){
    this.products = products;
    
  }
  addToCartPro(product: IProduct, index: number){
    this.cartService.addToCartPro(product, index);
  }
}
