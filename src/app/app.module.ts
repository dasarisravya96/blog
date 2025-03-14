import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LemonComponent } from './lemon/lemon.component';
import { VerizonComponent } from './verizon/verizon.component';
import { IntegraComponent } from './integra/integra.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PermissionsblogComponent } from './permissionsblog/permissionsblog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PosturairComponent } from './posturair/posturair.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonComponent,
    VerizonComponent,
    IntegraComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    PermissionsblogComponent,
    PrivacyPolicyComponent,
    PosturairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
