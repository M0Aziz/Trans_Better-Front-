import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageMoyenModel } from '../model/image-moyen.model';

@Injectable({
  providedIn: 'root'
})
export class ImageMoyenService {

  BASE_URL= "http://localhost:8082/moyen/";


  constructor(private httpClient: HttpClient) {}
  
  getAllImages(): Observable<ImageMoyenModel[]> {
    return this.httpClient.get<ImageMoyenModel[]>(`${this.BASE_URL}imageMoyen/retrieveAllImageMoyen`);
  }

  getImageById(id: number): Observable<ImageMoyenModel> {
  
    return this.httpClient.get<ImageMoyenModel>(`${this.BASE_URL}imageMoyen/getByIdImageMoyen/${id}`);
  }
  
  deleteImage(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}imageMoyen/deleteImageMoyen/${id}`);
  }

  updateImage(image: ImageMoyenModel): Observable<ImageMoyenModel> {
    return this.httpClient.put<ImageMoyenModel>(`${this.BASE_URL}imageMoyen/updateImageMoyen/${image.idImageMoyen}`, image);
  }
}
