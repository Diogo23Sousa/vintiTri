import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ClothingDataService } from 'src/app/services/clothing-data.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-polos',
  templateUrl: './polos.component.html',
  styleUrls: ['./polos.component.css']
})
export class PolosComponent implements OnInit {
indexOfImageByColor = 0;
poloCollection = [];

// This is the the styling of the page
addToMyCartSuccess = 'none';


constructor(@Inject(DOCUMENT) document, private shoppingService: ShoppingService, private clothingDataService: ClothingDataService) { }

ngOnInit() {
// Retrieving the tshirt collection from ClothingDataService
this.poloCollection = this.clothingDataService.getPoloCollection();
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
  let poloColor = (<HTMLInputElement>document.getElementById(model + ".color")).value;
  console.log("I'm changin my color! to the item in the index: " + i + " and the color choosen is: " + poloColor);

  if (poloColor === 'Deep Blue' || poloColor === 'Beige' || poloColor === 'Night Black') {
    this.indexOfImageByColor = 0;
  }
  if (poloColor === 'Plain Green' || poloColor === 'Simple Blue' || poloColor === 'Old Blue') {
    this.indexOfImageByColor = 1;
  }
  if (poloColor === 'Explorer Grey' || poloColor === 'Clear Grey' || poloColor === 'Light Grey') {
    this.indexOfImageByColor = 2;
  }
  // this.indexOfImageByColor = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  }
}

