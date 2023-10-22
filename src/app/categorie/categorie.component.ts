import { Component,OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent  implements OnInit  {
blog :any;
ngOnInit(): void {
  this.loadBlogs();
  
}
  constructor(private blogService:BlogService) { }


  loadBlogs(){

this.blogService.getBlogs().subscribe((datas)=>{
this.blog = datas},error => {console.log("il y a une Erreur avec l'etudiant")},
()=>{console.log("Chargement Etudiant done !!")});

}


  

  openDeleteConfirmationModal() {
    //alert("Are You Sure? You will not be able to recover this data");
    
    const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
    
    if (userConfirmed) {
       
        alert("Vous avez choisi de supprimer les données.");
    } else {
        alert("Vous avez annulé l'opération.");
    }
      }
}
