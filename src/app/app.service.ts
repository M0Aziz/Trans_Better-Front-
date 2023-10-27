import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl="http://localhost:8082/user"
  constructor(private http:HttpClient ) { }
  listUsers(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}/user`);
  }

  deleteUser(id: any): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }

  
  addUser(nom: any,email: any,password: any , createdAt:Date): Observable<any> {

    return this.http.post(`${this.baseUrl}/user`,{nom,email ,password ,createdAt});
  }

  listContacts(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}/contactus`);
  }

  
  deleteContact(id: any): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/contactus/${id}`);
  }

  addContact(objet: any,message: any, createdAt:Date, userr:any): Observable<any> {

    return this.http.post(`${this.baseUrl}/contactus`,{objet,message ,createdAt ,userr});
  }

  Login(email: any,password: any): Observable<any> {

    return this.http.post(`${this.baseUrl}/user/login`,{email,password});
  }
}
