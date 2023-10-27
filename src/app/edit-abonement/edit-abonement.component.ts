import { Component ,OnInit} from '@angular/core';
import { AbonementService } from '../Service/abonement.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-edit-abonement',
  templateUrl: './edit-abonement.component.html',
  styleUrls: ['./edit-abonement.component.css']
})
export class EditAbonementComponent implements OnInit {
  updatedTitle!: string;
  updatedPrice!: number;
  id!:any;
  sub!:any;
  abntmnt:any;

  constructor(private abonementService: AbonementService,  private route: ActivatedRoute ,private router: Router) { }


  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      console.log(params);
      var Numbervalue= Number(params.get('id'))
      this.id = Numbervalue

      this.loadabnt(this.id)


      
      
  });
  }


  loadabnt(id: string) {
    this.abonementService.getAbonementById(this.id).subscribe(
      (data: any) => {
        this.abntmnt = data; console.log(this.abntmnt);

      },
      (error) => {
        console.error('Erreur lors du chargement du blog.', error);
      }
    );
  }



  
  updateAbnt(): void {
    const updatedTicket = {
      title: this.updatedTitle,
      price: this.updatedPrice
    };

    this.abonementService.updateAbonement(this.id ,this.abntmnt).subscribe(() => {
      alert('Ticket updated successfully!');
      this.router.navigate(['/abonement']);
    });
  }

}

