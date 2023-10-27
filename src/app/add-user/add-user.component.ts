import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addForm!: FormGroup ;

  constructor(private fb: FormBuilder , private  appService:AppService, private router:Router) {
    this.addForm = this.fb.group({
      nom: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 _%+-]*$')
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 _%+-]*$')
      ]],
    });
  }

  onSubmit() {
    var createdAt = new Date();
    this.appService.addUser(this.addForm?.value.nom,this.addForm?.value.email,this.addForm?.value.password,createdAt).subscribe(
      res=>{
  
          alert('Utilisateur ajoutée')
          this.router.navigate(['/users']);
        
      }
    )
  }

}
