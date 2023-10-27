import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonementService {
  private apiUrl = 'http://localhost:8082/transport/Abonements'; 

  constructor(private http: HttpClient) { }

  getAllAbonements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getAbonementById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAbonement(abonement: any): Observable<any> { 
    console.log('Create Abonement Service Called', abonement);
    return this.http.post<any>(this.apiUrl, abonement);
  }
  
  updateAbonement(id: number, abonement: any): Observable<any> { 
    return this.http.put<any>(`${this.apiUrl}/${id}`, abonement);
  }

  deleteAbonement(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
