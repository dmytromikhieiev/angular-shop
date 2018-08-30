import { Injectable } from '@angular/core';
import {ProductModel} from '../model/product-model';
import {Category} from '../component/product/product.category';

@Injectable()
export class ProductService {

  private products: Array<ProductModel>;
  constructor () {
    this.products = [];
    this.products.push(new ProductModel('Product1', Category.Category1));
    this.products.push(new ProductModel('Product2', Category.Category2));
  }

  getProducts (): Array<ProductModel> {
    return this.products;
  }
}
