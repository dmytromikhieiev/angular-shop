import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from '../../component/product/product.component';
import {ProductListComponentComponent} from '../../component/product-list-component/product-list-component.component';
import {BuyButtonComponent} from '../../component/buy-button/buy-button.component';
import {ProductService} from '../../service/product.service';
import {CartService} from '../../service/cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ProductListComponentComponent,
      ProductComponent,
      BuyButtonComponent,
  ],
  providers: [
      ProductService,
      CartService
  ],
  exports: [ProductListComponentComponent]
})
export class ProductsModule { }
