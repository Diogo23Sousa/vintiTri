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
tshirt;

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
  let myImageSrc1;
  let myImageSrc2;
  let index = 0;
  let tshirtColor = (<HTMLInputElement>document.getElementById(model + ".color")).value;

  if (tshirtColor === 'Night Black' || tshirtColor === 'Deep Green' || tshirtColor === 'Modern Black') {index = 0;}
  if (tshirtColor === 'Florest Mint' || tshirtColor === 'Plastic Grey' || tshirtColor === 'Deep Blue') {index = 1;}
  if (tshirtColor === 'Simple White' || tshirtColor === 'Happy Orange' || tshirtColor === 'Plain White') {index = 2;}

  if (model === 'SLIM-FIT') {
    myImageSrc1 = this.clothingDataService.slimFitTshirt.images[index][0];
    myImageSrc2 = this.clothingDataService.slimFitTshirt.images[index][1];
  }

  if (model === 'REGULAR') {
    myImageSrc1 = this.clothingDataService.regularTshirt.images[index][0];
    myImageSrc2 = this.clothingDataService.regularTshirt.images[index][1];
  }

  if (model === 'CLASSIC CUT') {
    myImageSrc1 = this.clothingDataService.classicCutTshirt.images[index][0];
    myImageSrc2 = this.clothingDataService.classicCutTshirt.images[index][1];
  }

  (<HTMLInputElement>document.getElementById(model + "1")).src = myImageSrc1;
  (<HTMLInputElement>document.getElementById(model + "2")).src = myImageSrc2;
  }
}