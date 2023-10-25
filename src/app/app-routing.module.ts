import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LemonComponent} from './lemon/lemon.component';
import { BlogComponent } from './blog/blog.component';
import { PermissionsblogComponent } from './permissionsblog/permissionsblog.component';

const routes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'lemonos',     component: LemonComponent },
  { path: 'blog',     component: BlogComponent },
  { path: 'permissionsblog',     component: PermissionsblogComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
