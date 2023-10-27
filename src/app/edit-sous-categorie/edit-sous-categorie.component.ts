
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SouscategorieService } from '../Service/souscategorie.service';
import { CategorieService } from '../Service/categorie.service';

@Component({
  selector: 'app-edit-sous-categorie',
  templateUrl: './edit-sous-categorie.component.html',
  styleUrls: ['./edit-sous-categorie.component.css']
})
export class EditSousCategorieComponent {


  ngOnInit(): void {
    this.loadBlogs();
    this.route.params.subscribe(params => {
      if (params['id']) {
        const blogId = params['id'];
        this.id=blogId;
        this.loadcat(blogId);
        this.selectedCategoryId = blogId; 

      }
    });
  }
  cat: any = {}; // Initialisez avec un objet vide ou des valeurs par défaut si nécessaire
  id!:number;
  cat2: any = {};
  selectedCategoryId!: number;

    constructor(private souscatService: SouscategorieService, private route: ActivatedRoute, private router: Router, private catService:CategorieService) {}
    loadcat(id: Number) {
      this.souscatService.loadcat(id).subscribe(
        (data: any) => {
          this.cat = data;
        },
        (error) => {
          console.error('Erreur lors du chargement du sous catgeorie.', error);
        }
      );
    }

    updateCat() {
      this.cat.categorie = { id: this.selectedCategoryId };

      this.souscatService.editCategorie(this.id,this.cat).subscribe(
        (data: any) => {
          this.router.navigate(['/souscategorie'], { queryParams: { success: 'sous categorie Modifier avec succèss ' } }); 
  
        },
        (error) => {
          console.error('Erreur lors de la mise à jour sous categorie.', error);
        }
      );
    }


    
  loadBlogs(){

    this.catService.getCategorie().subscribe((datas)=>{
    this.cat2 = datas},error => {console.log("il y a une Erreur avec la catégorie")},
    ()=>{console.log("Chargement categorie done !!")});
    
    }
}
