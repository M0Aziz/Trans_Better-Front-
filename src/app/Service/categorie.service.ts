import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  url ="http://localhost:8082/categorie/categories/"

  constructor(private httpClient : HttpClient) { }



  getCategorie(){

    return this.httpClient.get(this.url);
  
  
  }

  addCategorie(cat:any){

    return this.httpClient.post(this.url,cat);
  
  
  }
  loadcat(id:Number){

    return this.httpClient.get(this.url+id);
  
  
  }
  
  editCategorie(id:Number, cat:any){

    return this.httpClient.put(this.url+id,cat);
  
  
  }

  DelCategorie(id:number){

    return this.httpClient.delete(this.url+id);
  
  
  }
}
