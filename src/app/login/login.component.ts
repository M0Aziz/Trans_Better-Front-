import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addForm!: FormGroup ;

  constructor(private fb: FormBuilder , private  appService:AppService, private router:Router) {
    this.addForm = this.fb.group({
    
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
    this.appService.Login(this.addForm?.value.email,this.addForm?.value.password).subscribe(
      res=>{

        console.log(res)
       
  
          alert('Bienvenue')
          localStorage.setItem('auth','true');
          this.router.navigate(['/dashborad__']);
        
      },
      err=>{
        alert('Verifier vos données')
      }
    )
  }
}
