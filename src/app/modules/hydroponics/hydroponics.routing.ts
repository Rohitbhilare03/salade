
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HydroponicsComponent } from './page/hydroponics.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: HydroponicsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HydroponicsRoutingModule { }