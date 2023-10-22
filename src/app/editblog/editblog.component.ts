import { Component,OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  blog: any = {}; // Initialisez avec un objet vide ou des valeurs par défaut si nécessaire
id!:string;
  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const blogId = params['id'];
        this.id=blogId;
        this.loadBlog(blogId);
      }
    });
  }

  loadBlog(id: string) {
    this.blogService.loadBlogs(id).subscribe(
      (data: any) => {
        this.blog = data.blog;
        console.log(this.blog);
      },
      (error) => {
        console.error('Erreur lors du chargement du blog.', error);
      }
    );
  }

  updateBlog() {
    this.blogService.putBlogs(this.id,this.blog).subscribe(
      (data: any) => {
        this.router.navigate(['/blog'], { queryParams: { success: 'Blog Modifier avec succèss ' } }); 

      },
      (error) => {
        console.error('Erreur lors de la mise à jour du blog.', error);
      }
    );
  }

}
