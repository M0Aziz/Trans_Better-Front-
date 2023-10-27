import { Component } from '@angular/core';
import { ImageMoyenModel } from './model/image-moyen.model';
import { Router } from '@angular/router';
import { ImageMoyenService } from './services/image-moyen.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-image-moyen',
  templateUrl: './image-moyen.component.html',
  styleUrls: ['./image-moyen.component.css']
})
export class ImageMoyenComponent {
  images: ImageMoyenModel[] = [];

  images$!: Observable<ImageMoyenModel[]>;

  constructor(private ImageMoyenService: ImageMoyenService,private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getAllImage();
  }

  getAllImage(): void {
    this.images$ =this.ImageMoyenService.getAllImages();
  }

  deleteImageMoyen(id: number): void {
    this.ImageMoyenService.deleteImage(id).subscribe(() => {
      this.images$ = this.images$.pipe(
        map((images: ImageMoyenModel[]) => images.filter((image) => image.idImageMoyen !== id))
      )
    })
  }

  navigateToUpdate(idImage: number): void {
    this.router.navigate(['update-image', idImage]);
  }

}
