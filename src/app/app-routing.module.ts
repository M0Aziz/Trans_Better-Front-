import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './addblog/addblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { MoyenTransportComponent } from './moyen-transport/moyen-transport.component';
import { ImageMoyenComponent } from './image-moyen/image-moyen.component';
import { AddMoyenComponent } from './moyen-transport/add-moyen/add-moyen.component';
import { AddImageComponent } from './image-moyen/add-image/add-image.component';
const routes: Routes = [



  { path: 'categorie', component: CategorieComponent },
  { path: 'Ajouter_Categorie', component: AddCategorieComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'Ajouter_blog', component: AddblogComponent },
  { path: 'edit_blog/:id', component: EditblogComponent },

  { path: 'login', component: LoginComponent },
  
  { path: 'moyenTransport', component: MoyenTransportComponent },
  { path: 'imageMoyen', component: ImageMoyenComponent },
  { path: 'addMoyen', component: AddMoyenComponent },
  { path: 'addImage', component: AddImageComponent },
  { path: 'update-image/:id', component: AddImageComponent },
  { path: 'update-moyen/:id', component: AddMoyenComponent },

  { path: 'dashborad__', component: DashboardComponent },
  { path: '**', redirectTo: 'dashborad__' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[provideRouter(routes, withComponentInputBinding())] 
})
export class AppRoutingModule { }
