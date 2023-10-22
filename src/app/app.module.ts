import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './addblog/addblog.component';
import { FormsModule } from '@angular/forms';
import { EditblogComponent } from './editblog/editblog.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CategorieComponent,
    AddCategorieComponent,
    BlogComponent,
    AddblogComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
