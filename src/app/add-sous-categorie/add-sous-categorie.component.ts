import { Component } from '@angular/core';
import { SouscategorieService } from '../Service/souscategorie.service';
import { CategorieService } from '../Service/categorie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-sous-categorie',
  templateUrl: './add-sous-categorie.component.html',
  styleUrls: ['./add-sous-categorie.component.css']
})
export class AddSousCategorieComponent {

cat:any;
selectedCategoryId!: number;
  ngOnInit(): void {
    this.loadBlogs();
  }

  constructor(private souscatService:SouscategorieService,private router: Router,private route: ActivatedRoute, private catService:CategorieService) {

  }


  AjouterBlog(f:any){
    console.log(this.selectedCategoryId)
    const univ = f;
    univ.categorie = { id: this.selectedCategoryId };
    console.log(univ);
    this.souscatService.addCategorie(univ).subscribe((datas)=>
    {    this.router.navigate(['/souscategorie'], { queryParams: { success: 'sous categorie added successfully' } });
    ;}
    );
console.log(f);

  }


  loadBlogs(){

    this.catService.getCategorie().subscribe((datas)=>{
    this.cat = datas},error => {console.log("il y a une Erreur avec la catégorie")},
    ()=>{console.log("Chargement categorie done !!")});
    
    }

}
