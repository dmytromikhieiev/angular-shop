import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { BuyButtonComponent } from './component/buy-button/buy-button.component';
import { ProductListComponentComponent } from './component/product-list-component/product-list-component.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BuyButtonComponent,
    ProductListComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
