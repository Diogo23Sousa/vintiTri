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

}

