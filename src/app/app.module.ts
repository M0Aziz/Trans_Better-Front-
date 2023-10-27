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
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component'; 


import { EditblogComponent } from './editblog/editblog.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { SousCategorieComponent } from './sous-categorie/sous-categorie.component';
import { AddSousCategorieComponent } from './add-sous-categorie/add-sous-categorie.component';
import { EditSousCategorieComponent } from './edit-sous-categorie/edit-sous-categorie.component'; 

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

    UserComponent,
    AddUserComponent,
    CommandesComponent,
    AddCommandeComponent

    EditCategorieComponent,
    SousCategorieComponent,
    AddSousCategorieComponent,
    EditSousCategorieComponent

  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
