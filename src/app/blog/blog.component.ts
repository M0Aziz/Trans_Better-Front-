import { Component,OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit  {
  blog :any;
  blogs:any | undefined;
  successMessage: string | undefined;
  ngOnInit(): void {
    this.loadBlogs();


    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['success']) {
        this.successMessage = queryParams['success'];
      }
    });
    
  }
    constructor(private blogService:BlogService,private route: ActivatedRoute, private router: Router) { }
  
  
    loadBlogs(){
  
  this.blogService.getBlogs().subscribe((datas)=>{
  this.blog = datas},error => {console.log("il y a une Erreur avec le blog")},
  ()=>{console.log("Chargement des blogs done !!")});
  
  }
  
  closeAlert() {
    this.successMessage = ''; // Efface le message de succès en affectant une chaîne vide
  }
  
    
  
    openDeleteConfirmationModal(id:string) {
      //alert("Are You Sure? You will not be able to recover this data");
      
      const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
      
      if (userConfirmed) {
         
          alert("Vous avez choisi de supprimer les données.");
          this.blogService.DelBlogs(id).subscribe((datas)=>{
            this.loadBlogs();
          })
      } else {
          alert("Vous avez annulé l'opération.");
      }
        }

}
