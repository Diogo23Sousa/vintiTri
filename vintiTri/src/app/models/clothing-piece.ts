export class ClothingPiece {
type: string;
model: string;
colors: [string];
sizes: [string];
images: [string];
price: string;
available: boolean;

constructor(type, model, colors, sizes, images, price, available){
    this.type = type;
    this.model = model;
    this.colors = colors;
    this.sizes = sizes;
    this.images = images;
    this.price = price;
    this.available = available;
    }

}