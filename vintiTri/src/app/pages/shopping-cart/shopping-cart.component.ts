import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
totalValue = 0.00;
totalOrder =  [];
isBasketEmpty = true;

  constructor(private router: Router, private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.totalOrder = this.shoppingService.getMyOrders();
    if (this.totalOrder.length > 0) {
      this.isBasketEmpty = false;
      this.totalOrder.forEach(order => {
        this.totalValue += +order.price;
      });
    } else {
      this.isBasketEmpty = true;
    }
  }

  removeThisItem(i) {
    console.log("I'm removing this item with the index: " + i);
    this.totalOrder.splice(i, 1);
    if (this.totalOrder.length > 0) {
      this.totalValue = 0.00;
      this.totalOrder.forEach(order => {
        this.totalValue += +order.price;
      });
    } else {
      this.isBasketEmpty = true;
    }
  }

}
