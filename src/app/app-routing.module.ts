import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './addblog/addblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { EditSousCategorieComponent } from './edit-sous-categorie/edit-sous-categorie.component';
import { AddSousCategorieComponent } from './add-sous-categorie/add-sous-categorie.component';
import { SousCategorieComponent } from './sous-categorie/sous-categorie.component';
const routes: Routes = [



  { path: 'categorie', component: CategorieComponent },
  { path: 'Ajouter_Categorie', component: AddCategorieComponent },
  { path: 'souscategorie', component: SousCategorieComponent },
  { path: 'Ajouter_sousCategorie', component: AddSousCategorieComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'Ajouter_blog', component: AddblogComponent },
  { path: 'edit_blog/:id', component: EditblogComponent },
  { path: 'edit_cat/:id', component: EditCategorieComponent },
  { path: 'edit_souscat/:id', component: EditSousCategorieComponent },

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
