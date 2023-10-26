import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoyenTransportModel } from '../model/moyen-transport.model';
@Injectable({
  providedIn: 'root'
})
export class MoyenTransportService {
BASE_URL= "http://localhost:9090/";


constructor(private httpClient: HttpClient) {}

getAllMoyens() {
  return this.httpClient.get(this.BASE_URL+"moyenTransport/retrieveAllMoyen");
}

deleteMoyen(id: number): Observable<void> {
  return this.httpClient.delete<void>(`${this.BASE_URL}moyenTransport/deleteMoyenTransport/${id}`);
}
getMoyenById(id: number): Observable<MoyenTransportModel> {
  
  return this.httpClient.get<MoyenTransportModel>(`${this.BASE_URL}moyenTransport/getByIdMoyenTransport/${id}`);
}
}
