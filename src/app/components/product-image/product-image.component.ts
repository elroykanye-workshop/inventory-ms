import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input('imageUrl') productImage: string;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {
    this.productImage = "";
  }

  ngOnInit(): void {
  }

}
