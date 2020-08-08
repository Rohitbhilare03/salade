
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './page/products.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'salad/:id',
        component: ProductDetailComponent
    },
    {
        path: 'juice/:id',
        component: ProductDetailComponent
    },
    {
        path: 'other/:id',
        component: ProductDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }