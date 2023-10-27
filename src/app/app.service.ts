import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl="http://localhost:8082/user"
  baseurl2="http://localhost:9090"
  constructor(private http:HttpClient ) { }
  listUsers(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}/user`);
  }

  deleteUser(id: any): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }

  
  addCommande(total: any,quantity: any,ticket_id: any): Observable<any> {

    return this.http.post(`${this.baseurl2}/commande/add`,{total,quantity ,ticket_id });
  }
  listCommandes(): Observable<any> {
   
    return this.http.get(`${this.baseurl2}/commande/getAll`);
  }

  deleteCommandes(id: any): Observable<any> {
  
    return this.http.delete(`${this.baseurl2}/commande/delete/${id}`);
  }

  
  addUser(nom: any,email: any,password: any): Observable<any> {

    return this.http.post(`${this.baseUrl}/user`,{nom,email ,password });
  }
}
