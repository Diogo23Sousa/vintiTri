import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ClothingDataService } from 'src/app/services/clothing-data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent implements OnInit {
indexOfImageByColor = 0;
tShirtCollection = [];

// This is the the styling of the page
addToMyCartSuccess = 'none';


constructor(@Inject(DOCUMENT) document, private shoppingService: ShoppingService, private clothingDataService: ClothingDataService) { }

ngOnInit() {
// Retrieving the tshirt collection from ClothingDataService
this.tShirtCollection = this.clothingDataService.getTshirtCollection();
}

buyItNow(type, model, price) {
    let color = (<HTMLInputElement>document.getElementById(model + ".color")).value;
    let size = (<HTMLInputElement>document.getElementById(model + ".size")).value;
    this.shoppingService.addToCart(type, model, color, size, price);
}

addToCart(type, model, price) {
    let color = (<HTMLInputElement>document.getElementById(model + ".color")).value;
    let size = (<HTMLInputElement>document.getElementById(model + ".size")).value;
    this.shoppingService.addToCart(type, model, color, size, price);
    this.addToMyCartSuccess = '';
    window.scrollTo(0, 0);
}

changeImageByColor(i, model) {
  let tshirtColor = (<HTMLInputElement>document.getElementById(model + ".color")).value;
  console.log("I'm changin my color! to the item in the index: " + i + " and the color choosen is: " + tshirtColor);

  if (tshirtColor === 'Night Black' || tshirtColor === 'Deep Green' || tshirtColor === 'Modern Black') {
    this.indexOfImageByColor = 0;
  }
  if (tshirtColor === 'Florest Mint' || tshirtColor === 'Plastic Grey' || tshirtColor === 'Deep Blue') {
    this.indexOfImageByColor = 1;
  }
  if (tshirtColor === 'Simple White' || tshirtColor === 'Happy Orange' || tshirtColor === 'Plain White') {
    this.indexOfImageByColor = 2;
  }
  }
}
