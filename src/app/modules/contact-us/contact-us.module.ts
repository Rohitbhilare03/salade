import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactUsRoutingModule } from './contact-us.routing';
import { ContactUsComponent } from './page/contact-us.component';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ]
})
export class ContactUsModule { }
