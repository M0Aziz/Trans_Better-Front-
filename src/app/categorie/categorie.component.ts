import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
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
