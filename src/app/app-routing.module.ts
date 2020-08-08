import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';



const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'hydroponics',
        loadChildren: () => import('./modules/hydroponics/hydroponics.module').then(m => m.HydroponicsModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)
      }
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
