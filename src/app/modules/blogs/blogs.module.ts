import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './page/blogs.component';
import { ProductsRoutingModule } from './blogs.routing';
import { SharedModule } from '../shared/shared.module';
import { BlogPostComponent } from './page/blog-post/blog-post.component';



@NgModule({
  declarations: [BlogsComponent, BlogPostComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
