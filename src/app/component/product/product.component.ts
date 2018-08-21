import {Component, Input, OnInit} from '@angular/core';
import {Category} from './product.category';
import {ProductModel} from '../../model/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  constructor() {}

  ngOnInit() {
  }

}
