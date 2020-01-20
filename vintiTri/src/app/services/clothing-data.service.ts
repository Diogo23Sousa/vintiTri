import { Injectable } from '@angular/core';
import { ClothingPiece } from '../models/clothing-piece';

@Injectable({
  providedIn: 'root'
})
export class ClothingDataService {
// This is the collection of the t-shirts
tShirtCollection = [];

// ---------------------------------------------------- T-SHIRTS ----------------------------------------------------
// Colors
slimFitTshirtColors = ['Night Black', 'Grey Red', 'Florest Green', 'Deep Blue', 'Simple White', 'Sand Explorer'];
regularTshirtColors = ['Black Tax', 'Grey Green', 'Natural Wood', 'Ocean Blue', 'Blanco', 'Happy Yellow'];
classicCutTshirtColors = ['Mamba Dark', 'Dark Grey', 'Indigo', 'Mint', 'Azure Black', 'Orange Fruit'];

// Sizes
slimFitTshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
regularTshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
classicCutTshirtSizes = ['XS', 'S', 'M', 'L', 'XL'];

// Images
slimFitTshirtImages = ['../../../assets/my-project-images/redShirtModel.jpg', '../../../assets/my-project-images/poloShirtModel.jpg'];
regularTshirtImages = ['../../../assets/my-project-images/redShirtModel.jpg', '../../../assets/my-project-images/poloShirtModel.jpg'];
classicCutTshirtImages = ['../../../assets/my-project-images/redShirtModel.jpg', '../../../assets/my-project-images/poloShirtModel.jpg'];

// Final Object
// tslint:disable-next-line: max-line-length
slimFitTshirt = new ClothingPiece('T-SHIRT', 'SLIM-FIT', this.slimFitTshirtColors, this.slimFitTshirtSizes, this.slimFitTshirtImages, '26.99€', true);
// tslint:disable-next-line: max-line-length
regularTshirt = new ClothingPiece('T-SHIRT', 'REGULAR', this.regularTshirtColors, this.regularTshirtSizes, this.regularTshirtImages, '29.99€', true);
// tslint:disable-next-line: max-line-length
classicCutTshirt = new ClothingPiece('T-SHIRT', 'CLASSIC CUT', this.classicCutTshirtColors, this.classicCutTshirtSizes, this.classicCutTshirtImages, '32.99€', true);

// ---------------------------------------------------- POLOS ----------------------------------------------------

  constructor() { }


  getTshirtCollection() {
  this.tShirtCollection.push(this.slimFitTshirt, this.regularTshirt, this.classicCutTshirt);
  return this.tShirtCollection;
  }
}
