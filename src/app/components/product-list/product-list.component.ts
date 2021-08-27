import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../models/product";

/**
 * @ProductList: A component for rendering all ProductRows and
 * storing the currently selected Product.
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /**
   * @input productList - the product[] passed to us
   */
  @Input() productList: Product[];

  /**
   * @output onProductSelected - outputs the current product whenever
   * a new product is selected
   */
  @Output() onProductSelected: EventEmitter<Product> | undefined;

  /**
   * @property currentProduct - local state containing the currently
   * selected 'Product'
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
    this.productList = []
    // @ts-ignore
    this.currentProduct = null;
  }

  ngOnInit(): void {
  }

  clicked(product: Product) : void  {
    this.currentProduct = product;
    this.onProductSelected?.emit(product)
  }

  isSelected(product : Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    } return product.sku === this.currentProduct.sku;
  }

}
