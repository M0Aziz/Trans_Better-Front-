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
import { TicketComponent } from './ticket/ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { AbonementComponent } from './abonement/abonement.component';
import { EditAbonementComponent } from './edit-abonement/edit-abonement.component';
import { AddAbonementComponent } from './add-abonement/add-abonement.component'; 

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
    AddAbonementComponent
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
