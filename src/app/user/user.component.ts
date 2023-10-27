import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  listUser:any;
  constructor( private appService:AppService ) {
   
  }
  ngOnInit(): void {
  this.getUsers();
  }

  getUsers(){
    this.appService.listUsers()
    .subscribe(response => {
      // Handle the response here
     this.listUser=response;
      console.log(response)
    });
  }
  openDeleteConfirmationModal(id:any) {
    //alert("Are You Sure? You will not be able to recover this data");
    
    const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
    
    if (userConfirmed) {
      this.appService.deleteUser(id)
      .subscribe(response => {
      
        this.getUsers();
      });
       
    } else {
        alert("Vous avez annulé l'opération.");
    }
      }
}
