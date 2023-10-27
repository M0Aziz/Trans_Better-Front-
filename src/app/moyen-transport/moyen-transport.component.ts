import { Component, NgModule, OnInit } from '@angular/core';
import { MoyenTransportService } from './services/moyen-transport.service';
import { MoyenTransportModel } from './model/moyen-transport.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
 
  selector: 'app-moyen-transport',
  templateUrl: './moyen-transport.component.html',
  styleUrls: ['./moyen-transport.component.css']
})

export class MoyenTransportComponent implements OnInit {
  moyens: MoyenTransportModel[] = []; 
  moyens$!: Observable<MoyenTransportModel[]>;

  constructor(private moyenTransportService: MoyenTransportService,private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.moyenTransportService.getAllMoyens().subscribe(data => {
      this.moyens = data as MoyenTransportModel[]; 
    });
  }

  deleteMoyenTransport(id: number): void {
    this.moyenTransportService.deleteMoyen(id).subscribe(() => {
      this.moyens$ = this.moyens$.pipe(
        map((moyens: MoyenTransportModel[]) => moyens.filter((moyen) => moyen.idMoyen !== id))
      )
    })
  }
  navigateToUpdate(idMoyen: number): void {
    this.router.navigate(['update-moyen', idMoyen]);
  }

}
