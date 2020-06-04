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
  let myImageSrc1;
  let myImageSrc2;
  let index = 0;
  let poloColor = (<HTMLInputElement>document.getElementById(model + ".color")).value;
  
  if (poloColor === 'Deep Blue' || poloColor === 'Beige' || poloColor === 'Night Black') {index = 0;}
  if (poloColor === 'Plain Green' || poloColor === 'Simple Blue' || poloColor === 'Old Blue') {index = 1;}
  if (poloColor === 'Explorer Grey' || poloColor === 'Clear Grey' || poloColor === 'Light Grey') {index = 2;}

  if (model === 'SLIM-FIT') {
      myImageSrc1 = this.clothingDataService.slimFitPolo.images[index][0];
      myImageSrc2 = this.clothingDataService.slimFitPolo.images[index][1];
  }

  if (model === 'REGULAR') {
      myImageSrc1 = this.clothingDataService.regularPolo.images[index][0];
      myImageSrc2 = this.clothingDataService.regularPolo.images[index][1];
  }

  if (model === 'CLASSIC CUT') {
      myImageSrc1 = this.clothingDataService.classicCutPolo.images[index][0];
      myImageSrc2 = this.clothingDataService.classicCutPolo.images[index][1];
    }

    (<HTMLInputElement>document.getElementById(model + "1")).src = myImageSrc1;
    (<HTMLInputElement>document.getElementById(model + "2")).src = myImageSrc2;
    }
}

