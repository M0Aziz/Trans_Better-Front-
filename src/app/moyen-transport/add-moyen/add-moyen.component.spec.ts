import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoyenComponent } from './add-moyen.component';

describe('AddMoyenComponent', () => {
  let component: AddMoyenComponent;
  let fixture: ComponentFixture<AddMoyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMoyenComponent]
    });
    fixture = TestBed.createComponent(AddMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
