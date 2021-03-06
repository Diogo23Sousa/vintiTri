import { Injectable } from '@angular/core';
import { MyItem } from 'src/app/models/my-item';

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
myItem: MyItem;
totalOrders = [];
myItemId = 0;

constructor() {

}

addToCart(type, model, price, color, size) {
  this.myItemId ++;
  this.totalOrders.push(new MyItem(type, model, price, color, size));
}

getMyOrders() {
  return this.totalOrders;
}
}
