import { Component,OnInit } from '@angular/core';
import { CategorieService } from '../Service/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent  implements OnInit  {
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
  constructor(private catService:CategorieService,private route: ActivatedRoute, private router: Router) { }
  closeAlert() {
    this.successMessage = ''; // Efface le message de succès en affectant une chaîne vide
  }
  

  loadBlogs(){

this.catService.getCategorie().subscribe((datas)=>{
this.cat = datas},error => {console.log("il y a une Erreur avec la catégorie")},
()=>{console.log("Chargement categorie done !!")});

}


  

  openDeleteConfirmationModal(id:number) {
    //alert("Are You Sure? You will not be able to recover this data");
    
    const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
    
    if (userConfirmed) {

      alert("Vous avez choisi de supprimer les données.");
          this.catService.DelCategorie(id).subscribe((datas)=>{
            this.loadBlogs();
          })
       
        alert("Vous avez choisi de supprimer les données.");
    } else {
        alert("Vous avez annulé l'opération.");
    }
      }
}
