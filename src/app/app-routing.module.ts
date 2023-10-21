import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
const routes: Routes = [



  { path: 'categorie', component: CategorieComponent },
  { path: 'Ajouter_Categorie', component: AddCategorieComponent },

 

  { path: 'login', component: LoginComponent },

  { path: 'dashborad__', component: DashboardComponent },
  { path: '**', redirectTo: 'dashborad__' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
