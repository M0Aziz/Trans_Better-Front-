import { Component } from '@angular/core';
import { CategorieService } from '../Service/categorie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {

  ngOnInit(): void {
    
  }

  constructor(private catService:CategorieService,private router: Router,private route: ActivatedRoute) {

  }


  AjouterBlog(f:any){
    const univ = f;
    this.catService.addCategorie(univ).subscribe((datas)=>
    {    this.router.navigate(['/categorie'], { queryParams: { success: 'categorie added successfully' } });
    ;}
    );
console.log(f);

  }

}
