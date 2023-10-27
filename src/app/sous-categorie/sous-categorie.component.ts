
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SouscategorieService } from '../Service/souscategorie.service';
@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent implements OnInit  {


cat :any;
successMessage: string | undefined;

ngOnInit(): void {
  this.loadBlogs();

  this.route.queryParams.subscribe((queryParams) => {
    if (queryParams['success']) {
      this.successMessage = queryParams['success'];
    }
  });
  
  
}
  constructor(private souscatService:SouscategorieService,private route: ActivatedRoute, private router: Router) { }
  closeAlert() {
    this.successMessage = ''; 
  }
  

  loadBlogs(){

this.souscatService.getCategorie().subscribe((datas)=>{
this.cat = datas},error => {console.log("il y a une Erreur avec la catégorie")},
()=>{console.log("Chargement categorie done !!")});

}


  

  openDeleteConfirmationModal(id:number) {
    //alert("Are You Sure? You will not be able to recover this data");
    
    const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
    
    if (userConfirmed) {

      alert("Vous avez choisi de supprimer les données.");
          this.souscatService.DelCategorie(id).subscribe((datas)=>{
            this.loadBlogs();
          })
       
    } else {
        alert("Vous avez annulé l'opération.");
    }
      }
}
