
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from './page/blog-post/blog-post.component';
import { BlogsComponent } from './page/blogs.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: BlogsComponent
    },
    {
        path: ':id',
        component: BlogPostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }