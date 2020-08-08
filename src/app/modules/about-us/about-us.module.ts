import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutUsRoutingModule } from './about-us.routing';
import { AboutUsComponent } from './page/about-us.component';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
