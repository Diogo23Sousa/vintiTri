import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
totalValue = 0;
totalOrder =  [];
isBasketEmpty = true;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.totalOrder = this.shoppingService.getMyOrders();
    if (this.totalOrder.length > 0) {
      this.isBasketEmpty = false;
      this.totalOrder.forEach(order => {
        (this.totalValue += +order.price).toFixed(2);
      });
    } else {
      this.isBasketEmpty = true;
    }
  }
}
