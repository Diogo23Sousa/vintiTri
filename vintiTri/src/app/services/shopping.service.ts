import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

addToCart() {
  console.log("product was added to cart");
}
}
