import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent {
  addForm!: FormGroup ;

  constructor(private fb: FormBuilder , private  appService:AppService, private router:Router) {
    this.addForm = this.fb.group({
      total: ['', [
        Validators.required,
       
      ]],
      quantity: ['', [
        Validators.required,
      
      ]],
  
    });
  }

  onSubmit() {
    console.log((this.addForm?.value.total,this.addForm?.value.quantity,"1"))
    this.appService.addCommande(this.addForm?.value.total,this.addForm?.value.quantity,"1").subscribe(
      res=>{
     
          alert('Commande ajoutée')
          this.router.navigate(['/commandes']);
        
      }
    )
  }
}
