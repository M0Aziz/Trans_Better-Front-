import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoyenTransportService } from '../services/moyen-transport.service';
import { Observable } from 'rxjs';
import { MoyenTransportModel } from '../model/moyen-transport.model';

@Component({
  selector: 'app-add-moyen',
  templateUrl: './add-moyen.component.html',
  styleUrls: ['./add-moyen.component.css']
})
export class AddMoyenComponent {
  moyenForm!: FormGroup;
  @Input() id?: number;

  image$!:Observable<MoyenTransportModel>;

  constructor(
    private moyenTransportService: MoyenTransportService, 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router

  ) {

  }
  buildForm(): void {
    this.moyenForm = this.formBuilder.group({
      numero: ['', Validators.required],
      description: ['', Validators.required],
      horaire: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.buildForm();   
    this.patchFormMoyen(); 
  }
  patchFormMoyen(): void {
    if (this.id) {
      this.image$ = this.moyenTransportService.getMoyenById(this.id);
      this.image$.subscribe((response) => {
        this.moyenForm.patchValue(response);
      })
    }
  }
  onSubmit() {
    if (this.moyenForm.valid) {
      const moyenData = this.moyenForm.value;
      this.http.post('http://localhost:8082/moyen/moyenTransport/addMoyenTransport', moyenData)
        .subscribe((response) => {
          console.log('Réponse de l\'API :', response);
          this.router.navigate(['/moyenTransport']);
        }, (error) => {
          // Gérez les erreurs ici
          console.error('Erreur lors de la requête :', error);
        });
    }
  }
  

  
}
