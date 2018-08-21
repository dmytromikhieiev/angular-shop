import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';
import {ProductModel} from '../../model/product-model';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() product: ProductModel;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(product: ProductModel): void {
    console.log(product);
    this.cartService.addToCart(product);
  }

}
