import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ClothingDataService } from 'src/app/services/clothing-data.service';
import { DOCUMENT } from '@angular/common';
import { $ } from 'protractor';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent implements OnInit {
colorSelected: string;
tShirtCollection = [];

// This is the the styling of the page
addToMyCartSuccess = 'none';


constructor(@Inject(DOCUMENT) document, private shoppingService: ShoppingService, private clothingDataService: ClothingDataService) { }

ngOnInit() {
// Retrieving the tshirt collection from ClothingDataService
this.tShirtCollection = this.clothingDataService.getTshirtCollection();
}

  buyItNow() {
    console.log("im buying this product!");
    this.shoppingService.addToCart();

  }

  addToCart(type, model, price, color, size) {
    this.addToMyCartSuccess = '';
    let colorSelected = document.getElementById(model + ".color").innerHTML;
    console.log("I'm buying this: " + type + '|' + model + '|' + price + '|' + colorSelected + '|' + size);
    this.shoppingService.addToCart();
    window.scrollTo(0, 0);
  }
}
