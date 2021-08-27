import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {
  @Input('price') productPrice: number;
  constructor() {
    this.productPrice = 0;
  }

  ngOnInit(): void {
  }

}
