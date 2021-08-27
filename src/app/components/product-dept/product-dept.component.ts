import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-dept',
  templateUrl: './product-dept.component.html',
  styleUrls: ['./product-dept.component.css']
})
export class ProductDeptComponent implements OnInit {
  @Input('department') productDept: Array<string>

  constructor() {
    this.productDept = [];
  }

  ngOnInit(): void {
  }

}
