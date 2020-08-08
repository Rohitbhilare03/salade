import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HydroponicsComponent } from './page/hydroponics.component';
import { HydroponicsRoutingModule } from './hydroponics.routing';



@NgModule({
  declarations: [HydroponicsComponent],
  imports: [
    CommonModule,
    HydroponicsRoutingModule,
    SharedModule
  ]
})
export class HydroponicsModule { }
