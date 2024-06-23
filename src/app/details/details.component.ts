import { Component } from '@angular/core';
import { IProduct } from '../products.model';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  products: IProduct[];
  product: IProduct;
 
  constructor(private route: ActivatedRoute,
    private cartService: CartService
  ){
    this.products = products;
    const id = +this.route.snapshot.params['id']
    this.product = this.products[id];
    
  }
  addToCart(){
    this.cartService.addToCart(this.product)
  }

}
