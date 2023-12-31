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

import { TicketComponent } from './ticket/ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { AbonementComponent } from './abonement/abonement.component';
import { EditAbonementComponent } from './edit-abonement/edit-abonement.component';
import { AddAbonementComponent } from './add-abonement/add-abonement.component'; 


import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MoyenTransportComponent } from './moyen-transport/moyen-transport.component';
import { AddMoyenComponent } from './moyen-transport/add-moyen/add-moyen.component';
import { ImageMoyenComponent } from './image-moyen/image-moyen.component';
import { AddImageComponent } from './image-moyen/add-image/add-image.component';


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
    TicketComponent,
    AddTicketComponent,
    EditTicketComponent,
    AbonementComponent,
    EditAbonementComponent,
    AddAbonementComponent,



    ContactComponent,
    AddContactComponent,


    MoyenTransportComponent,
    AddMoyenComponent,
    ImageMoyenComponent,
    AddImageComponent,
    UserComponent,
    AddUserComponent,
    CommandesComponent,
    AddCommandeComponent,

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
    FormsModule,
    CommonModule,


   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
