import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {
  openDeleteConfirmationModal(id:any) {
    //alert("Are You Sure? You will not be able to recover this data");
    
    const userConfirmed = confirm("Are You Sure? You will not be able to recover this data");
    
    if (userConfirmed) {
      console.log(id);
      alert('deleted')
       this.appService.deleteCommandes(id).subscribe(
        res=>{
          this.loadCommandes();
        },err=>{
          this.loadCommandes();
        }
     
       );
       
    


        
     
    
    } else {
        alert("Vous avez annulé l'opération.");
    }
      }

  commandes :any;
ngOnInit(): void {
  this.loadCommandes();
  
}
  constructor(private appService:AppService) { }


  loadCommandes(){

this.appService.listCommandes().subscribe((res)=>{
this.commandes = res},error => {console.log()});

}
}
