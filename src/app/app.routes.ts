import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"services",component:ServicesComponent},
    {path:"about",component:AboutComponent},
    {path:"contactus",component:ContactUsComponent},
    {path:"comments",component:CommentsComponent},
    {path:"posts",component:PostsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}