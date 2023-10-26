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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditblogComponent } from './editblog/editblog.component'; 
import { CommonModule } from '@angular/common';
import { MoyenTransportComponent } from './moyen-transport/moyen-transport.component';
import { AddMoyenComponent } from './moyen-transport/add-moyen/add-moyen.component';
import { ImageMoyenComponent } from './image-moyen/image-moyen.component';
import { AddImageComponent } from './image-moyen/add-image/add-image.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CategorieComponent,
    AddCategorieComponent,
    BlogComponent,
    AddblogComponent,
    EditblogComponent,
    MoyenTransportComponent,
    AddMoyenComponent,
    ImageMoyenComponent,
    AddImageComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
