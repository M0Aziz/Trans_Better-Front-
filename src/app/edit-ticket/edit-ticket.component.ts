import { Component ,OnInit} from '@angular/core';
import { TicketService } from '../Service/ticket.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  updatedTitle!: string;
  updatedPrice!: number;
  id!:any;
  sub!:any;
  ticket:any;


  constructor(private ticketService: TicketService,  private route: ActivatedRoute ,private router: Router) { }

  

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      console.log(params);
      var Numbervalue= Number(params.get('id'))
      this.id = Numbervalue

      this.loadBlog(this.id)


      
      
  });
  }

  loadBlog(id: string) {
    this.ticketService.getTicketById(this.id).subscribe(
      (data: any) => {
        this.ticket = data;
        console.log(this.ticket);

      },
      (error) => {
        console.error('Erreur lors du chargement du blog.', error);
      }
    );
  }


  updateTicket(): void {
    const updatedTicket = {
      title: this.updatedTitle,
      price: this.updatedPrice
    };

    this.ticketService.updateTicket(this.id ,this.ticket).subscribe(() => {
      alert('Ticket updated successfully!');
      this.router.navigate(['/ticket']);
    });
  }
}
