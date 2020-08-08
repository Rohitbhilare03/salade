
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './page/about-us.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: AboutUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule { }