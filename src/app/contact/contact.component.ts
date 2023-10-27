import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  listContact:any;
  constructor( private appService:AppService ) {
   
  }
  ngOnInit(): void {
  this.getContacts();
  }

  getContacts(){
    this.appService.listContacts()
    .subscribe(response => {
      // Handle the response here
     this.listContact=response;
      console.log(response)
    });
  }

  openDeleteConfirmationModal(id:any) {
    //alert("Are You Sure? You will not be able to recover this data");
    
    const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
    
    if (userConfirmed) {
       
        alert("Vous avez choisi de supprimer les données.");
        this.appService.deleteContact(id)
        .subscribe(response => {
        
          this.getContacts();
        });
    } else {
        alert("Vous avez annulé l'opération.");
    }
      }
}
