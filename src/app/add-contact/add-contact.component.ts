import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  listUser:any;
 

  addForm!: FormGroup ;
  user_id:any;
  constructor(private fb: FormBuilder , private  appService:AppService, private router:Router) {
    this.addForm = this.fb.group({
      objet: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 _%+-]*$')
      ]],
      message: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 _%+-]*$')
      ]],
      userr: [''],
    });
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
  onSubmit() {
    var createdAt = new Date();
    var userr = {
      id:this.addForm.value.userr
    }
  
    console.log(userr)
    
    this.appService.addContact(this.addForm?.value.objet,this.addForm?.value.message,createdAt,userr).subscribe(
      res=>{
  
          alert('Contact ajoutée')
          this.router.navigate(['/contacts']);
        
      }
    )
  }
}
