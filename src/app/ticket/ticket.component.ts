import { Component, OnInit } from '@angular/core';
import { TicketService } from '../Service/ticket.service';
import { Router } from '@angular/router';
import{ AppRoutingModule} from '../app-routing.module'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: any;
  updatedTitle !: string;
  updatedPrice !: number;
  newTicketTitle!: string;
  newTicketPrice !: number;

  constructor(private ticketService: TicketService,private router: Router )  { }

  ngOnInit(): void {
  
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getAllTickets().subscribe(data => {
      this.tickets = data;
    });
  }

  createTicket(): void {
    const newTicket = { title: this.newTicketTitle, price: this.newTicketPrice };
    this.ticketService.createTicket(newTicket).subscribe(() => {
      this.loadTickets();
    });
  }
 
  goToEditTicket(id: number): void {
    this.router.navigate(['/edit-ticket',id]);
  }

  updateTicket(id: number): void {
    const updatedTicket = {
      title: this.updatedTitle,
      price: this.updatedPrice
    };

    this.ticketService.updateTicket(id, updatedTicket).subscribe(() => {
      this.loadTickets();
    });
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id).subscribe(() => {
      this.loadTickets();
    });
  }
}
