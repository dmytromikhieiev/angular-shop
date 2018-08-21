import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {ProductModel} from '../../model/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<ProductModel>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: ProductModel) {
    this.cartService.removeFromCart(product);
  }
}
