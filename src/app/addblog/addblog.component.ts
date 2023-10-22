import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit  {
  blog :any;
  isEdit: boolean = false; 
  selectedBlog : any;
  blogId!: string;
  description!:string
  nom!:string
  ngOnInit(): void {
    
  }
    constructor(private blogService:BlogService,private router: Router,private route: ActivatedRoute) {


      this.route.params.subscribe(params => {
        if (params['id']) {
          // Mode modification (PUT)
          this.isEdit = true;
          this.blogId = params['id'];
          this.loadBlog(this.blogId); // Chargez les données du blog existant
        } else {
          // Mode ajout (POST)
          this.isEdit = false;
          // Initialisez un nouveau blog vide ici
        }
      });

    }

    loadBlog(id: string) {
      this.blogService.loadBlogs(id).subscribe(
        (data) => {
          this.blog = data; 
          this.nom = this.blog.blogs.nom;
          this.description = this.blog.blogs.description;
        },
        (error) => {
          console.error("Erreur lors du chargement du blog.", error);
        }
      );
    }


    ModifierBlog(f:any){


    }
    
  AjouterBlog(f:any){
    const univ = f;
    this.blogService.addBlogs(univ).subscribe((datas)=>
    {    this.router.navigate(['/blog'], { queryParams: { success: 'Blog added successfully' } });
    ;}
    );
console.log(f);

  }
}
