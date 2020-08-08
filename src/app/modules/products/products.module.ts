import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './page/products.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductRoutingModule } from './products.routing';


@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
