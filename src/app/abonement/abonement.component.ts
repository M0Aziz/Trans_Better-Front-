import { Component, OnInit } from '@angular/core';
import { AbonementService } from '../Service/abonement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abonement',
  templateUrl: './abonement.component.html',
  styleUrls: ['./abonement.component.css']
})
export class AbonementComponent implements OnInit {
  abonnements: any;
  updatedTitle !: string;
  updatedPrice !: number;
  newAbonementTitle!: string;
  newAbonementPrice !: number;

  constructor(private abonementService: AbonementService, private router: Router) { }

  ngOnInit(): void {
    this.loadAbonnements();
  }

  loadAbonnements(): void {
    this.abonementService.getAllAbonements().subscribe(data => {
      this.abonnements = data;
    });
  }

  createAbonement(): void {
    const newAbonement = { title: this.newAbonementTitle, price: this.newAbonementPrice };
    this.abonementService.createAbonement(newAbonement).subscribe(() => {
      this.loadAbonnements();
    });
  }

  goToEditAbonement(id: number): void {
    this.router.navigate(['/edit-abonement', id]);
  }

  updateAbonement(id: number): void {
    const updatedAbonement = {
      title: this.updatedTitle,
      price: this.updatedPrice
    };

    this.abonementService.updateAbonement(id, updatedAbonement).subscribe(() => {
      this.loadAbonnements();
    });
  }

  deleteAbonement(id: number): void {
    this.abonementService.deleteAbonement(id).subscribe(() => {
      this.loadAbonnements();
    });
  }
}
