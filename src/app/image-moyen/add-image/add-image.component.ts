import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators  as v} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoyenTransportModel } from 'src/app/moyen-transport/model/moyen-transport.model';
import { MoyenTransportService } from 'src/app/moyen-transport/services/moyen-transport.service';
import { ImageMoyenModel } from '../model/image-moyen.model';
import { ImageMoyenService } from '../services/image-moyen.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {
  moyens: MoyenTransportModel[] = []; 
  imageForm!: FormGroup;

  @Input() id?: number;

  image$!:Observable<ImageMoyenModel>;

  constructor(
    private moyenTransportService: MoyenTransportService, 
    private http: HttpClient, 
    private router: Router,
    private formBuilder: FormBuilder,
    private imageMoyenService: ImageMoyenService,
    )
    {

    }

    buildForm(): void {
      this.imageForm = this.formBuilder.group({
        path: ['', v.required],
        numMoyen: ['', v.required],
      });
    }

  ngOnInit(): void {
    this.buildForm();   
    this.patchFormImage(); 
    this.moyenTransportService.getAllMoyens().subscribe(data => {
      this.moyens = data as MoyenTransportModel[]; 
    });
  }

  patchFormImage(): void {
    if (this.id) {
      this.image$ = this.imageMoyenService.getImageById(this.id);
      this.image$.subscribe((response) => {
        this.imageForm.patchValue(response);
      })
    }
  }


  onSubmit() {

   
    
    
      console.log(this.imageForm.get('numMoyen')!.value)
      const imageData = {
        path: this.imageForm.get('path')?.value,
        numMoyen: Number(this.imageForm.get('numMoyen')?.value),
      }    
        this.http.post('http://localhost:8082/moyen/imageMoyen/addImageMoyen', imageData)
        .subscribe((response) => {
          console.log('Réponse de l\'API :', response);
          this.router.navigate(['/imageMoyen']);
        }, (error) => {
          console.error('Erreur lors de la requête :', error);
        });
    
  }
}
