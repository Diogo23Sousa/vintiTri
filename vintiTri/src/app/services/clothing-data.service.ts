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
slimFitTshirtColors = ['Night Black', 'Florest Mint', 'Simple White'];
regularTshirtColors = ['Deep Green', 'Plastic Grey', 'Happy Orange'];
classicCutTshirtColors = ['Modern Black', 'Deep Blue', 'Plain White'];

// Sizes
slimFitTshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
regularTshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
classicCutTshirtSizes = ['XS', 'S', 'M', 'L', 'XL'];

// Slim Fit Colors - Images
slimFitTshirtImagesBlack = ['../../../assets/clothing-images/shirts/slimFitBlackShirtA.jpg', '../../../assets/clothing-images/shirts/slimFitBlackShirtB.jpg'];
slimFitTshirtImagesMint = ['../../../assets/clothing-images/shirts/slimFitMintShirtA.jpg', '../../../assets/clothing-images/shirts/slimFitMintShirtB.jpg'];
slimFitTshirtImagesWhite = ['../../../assets/clothing-images/shirts/slimFitWhiteShirtA.jpg', '../../../assets/clothing-images/shirts/slimFitWhiteShirtB.jpg'];

// Regular Colors - Images
regularTshirtImagesGreen = ['../../../assets/clothing-images/shirts/tshirtSlimFitGreenA.jpg', '../../../assets/clothing-images/shirts/tshirtSlimFitGreenB.jpg'];
regularTshirtImagesGrey = ['../../../assets/clothing-images/shirts/tshirtSlimFitGreyA.jpg', '../../../assets/clothing-images/shirts/tshirtSlimFitGreyB.jpg'];
regularTshirtImagesOrange = ['../../../assets/clothing-images/shirts/tshirtSlimFitOrangeA.jpg', '../../../assets/clothing-images/shirts/tshirtSlimFitOrangeB.jpg'];

// Classic Cut Colors - Images
classicCutTshirtImagesBlack = ['../../../assets/clothing-images/shirts/casualBlackShirtA.jpg', '../../../assets/clothing-images/shirts/casualBlackShirtB.jpg'];
classicCutTshirtImagesBlue = ['../../../assets/clothing-images/shirts/casualBlueShirtA.jpg', '../../../assets/clothing-images/shirts/casualBlueShirtB.jpg'];
classicCutTshirtImagesWhite = ['../../../assets/clothing-images/shirts/casualWhiteShirtA.jpg', '../../../assets/clothing-images/shirts/casualWhiteShirtB.jpg'];

slimFitTshirtImages = [this.slimFitTshirtImagesBlack, this.slimFitTshirtImagesMint, this.slimFitTshirtImagesWhite];
regularTshirtImages = [this.regularTshirtImagesGreen, this.regularTshirtImagesGrey, this.regularTshirtImagesOrange];
classicCutTshirtImages = [this.classicCutTshirtImagesBlack, this.classicCutTshirtImagesBlue, this.classicCutTshirtImagesWhite];

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
slimFitPoloColors = ['Deep Blue', 'Plain Green', 'Explorer Grey'];
regularPoloColors = ['Beige', 'Simple Blue', 'Clear Grey'];
classicCutPoloColors = ['Night Black', 'Old Blue', 'Light Grey'];

// Sizes
slimFitPoloSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
regularPoloSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
classicCutPoloSizes = ['XS', 'S', 'M', 'L', 'XL'];

// Slim Fit Colors - Images
slimFitPoloImagesBlue = ['../../../assets/clothing-images/polos/anotherBluePoloA.jpg', '../../../assets/clothing-images/polos/anotherBluePoloB.jpg'];
slimFitPoloImagesGreen = ['../../../assets/clothing-images/polos/anotherGreenPoloA.jpg', '../../../assets/clothing-images/polos/anotherGreenPoloB.jpg'];
slimFitPoloImagesGrey = ['../../../assets/clothing-images/polos/anotherGreyPoloA.jpg', '../../../assets/clothing-images/polos/anotherGreyPoloB.jpg'];

// Regular Colors - Images
regularPoloImagesBeige = ['../../../assets/clothing-images/polos/regularBeigePoloA.jpg', '../../../assets/clothing-images/polos/regularBeigePoloB.jpg'];
regularPoloImagesBlue = ['../../../assets/clothing-images/polos/regularBluePoloA.jpg', '../../../assets/clothing-images/polos/regularBluePoloB.jpg'];
regularPoloImagesGrey = ['../../../assets/clothing-images/polos/regularGreenPoloA.jpg', '../../../assets/clothing-images/polos/regularGreenPoloB.jpg'];

// Classic Cut Colors - Images
classicCutPoloImagesBlack = ['../../../assets/clothing-images/polos/newBlackPoloA.jpg', '../../../assets/clothing-images/polos/newBlackPoloB.jpg'];
classicCutPoloImagesBlue = ['../../../assets/clothing-images/polos/newBluePoloA.jpg', '../../../assets/clothing-images/polos/newBluePoloB.jpg'];
classicCutPoloImagesGrey = ['../../../assets/clothing-images/polos/newGreyPoloA.jpg', '../../../assets/clothing-images/polos/newGreyPoloB.jpg'];

// Images
slimFitPoloImages = [this.slimFitPoloImagesBlue, this.slimFitPoloImagesGreen, this.slimFitPoloImagesGrey];
regularPoloImages = [this.regularPoloImagesBeige, this.regularPoloImagesBlue, this.regularPoloImagesGrey];
classicCutPoloImages = [this.classicCutPoloImagesBlack, this.classicCutPoloImagesBlue, this.classicCutPoloImagesGrey];

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

getSlimFitShirtImages() {
}
}
