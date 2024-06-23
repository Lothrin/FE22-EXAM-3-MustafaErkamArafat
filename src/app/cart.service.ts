import { Injectable } from '@angular/core';
import { IProduct } from './products.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: IProduct[]= [];
  constructor() { }

  addToCart(product: IProduct) {
    if (this.cartItems.includes(product)) {
      product.qtty++;
      alert(`Added another ${product.title} to your cart!`);
    } else {
      this.cartItems.push(product);
      alert(`Added ${product.title} to your cart!`);
    }
  }
addToCartPro(product: IProduct, index: number){
  if(this.cartItems.includes(product)){
    product.qtty++;
    alert(`Added another ${product.title} to your cart!`);
  }else{
  this.cartItems.push(product);
  alert(`Added ${product.title} to your cart!`);
}

}
  increaseQtty(product:IProduct){
  product.qtty++;
}
  decreaseQtty(product:IProduct){
    if(product.qtty > 1) {
    product.qtty--;
  }else{
    this.cartItems = this.cartItems.filter(cartItem => product != cartItem)
  }
  }
  deleteItem(index: number){
    this.cartItems[index].qtty = 1;
  this.cartItems.splice(index,1);
}
  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(product => total +=product.price * product.qtty)
    return total;
  }
  
  getServiceCharge(): number {
    return this.getTotal() * 0.10;
  }

  getDiscount(): number {
    if (this.getTotal() > 40) {
      return this.getTotal() * 0.15;
    } else {
      return 0;
    }
  }

  getTotalWithDiscount(): number {
    if (this.getTotal() > 40) {
      return this.getTotal() * 0.85;
    } else {
      return this.getTotal();
    }
  }


}
