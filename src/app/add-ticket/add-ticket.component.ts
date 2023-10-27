import { Component } from '@angular/core';
import { TicketService } from '../Service/ticket.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  newTicketTitle!: string;
  newTicketPrice!: number;

  constructor(private ticketService: TicketService, private router: Router) { }
  

  createTicket(f:any): void {
    const newTicket = { title: this.newTicketTitle, price: this.newTicketPrice };
    console.log(newTicket);
    this.ticketService.createTicket(f).subscribe(() => {
      // Optionally, you can add logic to handle the response after creating the ticket
      alert('Ticket created successfully!');
      // Reset the form fields
      this.newTicketTitle = '';
      this.newTicketPrice = 0; // Or whatever default value you prefer
      this.router.navigate(['/ticket']); // Navigate back to the ticket list

    });
  }
}
