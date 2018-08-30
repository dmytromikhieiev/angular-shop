import { Injectable } from '@angular/core';
import {ProductModel} from '../model/product-model';

@Injectable()
export class CartService {
  private products: Array<ProductModel> = [];

  addToCart(product: ProductModel): void {
    if (this.products.indexOf(product) ===-1) {
        this.products.push(product);
    }
  }

  removeFromCart(product: ProductModel): void {
    if (this.products.indexOf(product) >= 0) {
      this.products.splice(this.products.indexOf(product), 1);
    }
  }

  getProducts(): Array<ProductModel> {
    return this.products;
  }
}
