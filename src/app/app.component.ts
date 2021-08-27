import {Component} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICECHAT',
        'A Nice Black Hat',
        'resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      )
    ]
  }
  title = 'inventory-ms';

  productWasSelected(product: Product) : void {
    console.log(`Product clicked: ${product}`)
  }

}
