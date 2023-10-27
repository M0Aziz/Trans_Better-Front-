import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../Service/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent {
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const blogId = params['id'];
        this.id=blogId;
        this.loadcat(blogId);
      }
    });
  }
  cat: any = {}; // Initialisez avec un objet vide ou des valeurs par défaut si nécessaire
  id!:number;
    constructor(private catService: CategorieService, private route: ActivatedRoute, private router: Router) {}
    loadcat(id: Number) {
      this.catService.loadcat(id).subscribe(
        (data: any) => {
          this.cat = data;
          console.log(this.cat);
        },
        (error) => {
          console.error('Erreur lors du chargement du catgeorie.', error);
        }
      );
    }

    updateCat() {
      this.catService.editCategorie(this.id,this.cat).subscribe(
        (data: any) => {
          this.router.navigate(['/categorie'], { queryParams: { success: 'categorie Modifier avec succèss ' } }); 
  
        },
        (error) => {
          console.error('Erreur lors de la mise à jour categorie.', error);
        }
      );
    }
}
