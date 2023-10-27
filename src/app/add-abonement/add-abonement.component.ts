import { Component } from '@angular/core';
import { AbonementService } from '../Service/abonement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-abonement',
  templateUrl: './add-abonement.component.html',
  styleUrls: ['./add-abonement.component.css']
})
export class AddAbonementComponent {
  newAbonementTitle!: string;
  newAbonementPrice!: number;

  constructor(private abonementService: AbonementService, private router: Router) { }
  

  createAbonement(f:any): void {
    const newAbonement = { title: this.newAbonementTitle, price: this.newAbonementPrice };
    this.abonementService.createAbonement(f).subscribe(() => {
      // Optionally, you can add logic to handle the response after creating the abonement
      alert('Abonement created successfully!');
      // Reset the form fields
      this.router.navigate(['abonnement']); // Navigate back to the abonement list
    });
  
  }
}
