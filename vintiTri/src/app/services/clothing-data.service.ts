import { Injectable } from '@angular/core';
import { ClothingPiece } from '../models/clothing-piece';

@Injectable({
  providedIn: 'root'
})
export class ClothingDataService {
// ---------------------------------------------------- T-SHIRTS ----------------------------------------------------
// This is the collection of the t-shirts
tShirtCollection = [];

// Colors
slimFitTshirtColors = ['Night Black', 'Grey Red', 'Florest Green', 'Deep Blue', 'Simple White', 'Sand Explorer'];
regularTshirtColors = ['Black Tax', 'Grey Green', 'Natural Wood', 'Ocean Blue', 'Blanco', 'Happy Yellow'];
classicCutTshirtColors = ['Mamba Dark', 'Dark Grey', 'Indigo', 'Mint', 'Azure Black', 'Orange Fruit'];

// Sizes
slimFitTshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
regularTshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
classicCutTshirtSizes = ['XS', 'S', 'M', 'L', 'XL'];

// Images
slimFitTshirtImages = ['../../../assets/my-project-images/redShirtModel.jpg', '../../../assets/my-project-images/redShirtModel.jpg'];
regularTshirtImages = ['../../../assets/my-project-images/redShirtModel.jpg', '../../../assets/my-project-images/redShirtModel.jpg'];
classicCutTshirtImages = ['../../../assets/my-project-images/redShirtModel.jpg', '../../../assets/my-project-images/redShirtModel.jpg'];

// Final Object
// tslint:disable-next-line: max-line-length
slimFitTshirt = new ClothingPiece('T-SHIRT', 'SLIM-FIT', this.slimFitTshirtColors, this.slimFitTshirtSizes, this.slimFitTshirtImages, '26.99', true);
// tslint:disable-next-line: max-line-length
regularTshirt = new ClothingPiece('T-SHIRT', 'REGULAR', this.regularTshirtColors, this.regularTshirtSizes, this.regularTshirtImages, '29.99', true);
// tslint:disable-next-line: max-line-length
classicCutTshirt = new ClothingPiece('T-SHIRT', 'CLASSIC CUT', this.classicCutTshirtColors, this.classicCutTshirtSizes, this.classicCutTshirtImages, '32.99', true);

// ---------------------------------------------------- POLOS ----------------------------------------------------
// This is the collection of the polos
poloCollection = [];
// Colors
slimFitPoloColors = ['Nocturne', 'Marble', 'Spirit Green', 'Deep Ocean', 'Plain White', 'Explorer'];
regularPoloColors = ['Night Mode', 'Simple Grey', 'Natural Green', 'Clear Blue', 'Blanco', 'Orange-Yellow'];
classicCutPoloColors = ['Dark', 'Plain Grey', 'Mint', 'Light Blue', 'Turquise', 'Simple Purple'];

// Sizes
slimFitPoloSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
regularPoloSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
classicCutPoloSizes = ['XS', 'S', 'M', 'L', 'XL'];

// Images
slimFitPoloImages = ['../../../assets/my-project-images/poloShirtModel.jpg', '../../../assets/my-project-images/poloShirtModel.jpg'];
regularPoloImages = ['../../../assets/my-project-images/poloShirtModel.jpg', '../../../assets/my-project-images/poloShirtModel.jpg'];
classicCutPoloImages = ['../../../assets/my-project-images/poloShirtModel.jpg', '../../../assets/my-project-images/poloShirtModel.jpg'];

// Final Object
// tslint:disable-next-line: max-line-length
slimFitPolo = new ClothingPiece('POLO', 'SLIM-FIT', this.slimFitPoloColors, this.slimFitPoloSizes, this.slimFitPoloImages, '36.99', true);
// tslint:disable-next-line: max-line-length
regularPolo = new ClothingPiece('POLO', 'REGULAR', this.regularPoloColors, this.regularPoloSizes, this.regularPoloImages, '39.99', true);
// tslint:disable-next-line: max-line-length
classicCutPolo = new ClothingPiece('POLO', 'CLASSIC CUT', this.classicCutPoloColors, this.classicCutPoloSizes, this.classicCutPoloImages, '42.99', true);

constructor() {

}

getTshirtCollection() {
this.tShirtCollection = [];
this.tShirtCollection.push(this.slimFitTshirt, this.regularTshirt, this.classicCutTshirt);
return this.tShirtCollection;
}

getPoloCollection() {
this.poloCollection = [];
this.poloCollection.push(this.slimFitPolo, this.regularPolo, this.classicCutPolo);
return this.poloCollection;
}
}
