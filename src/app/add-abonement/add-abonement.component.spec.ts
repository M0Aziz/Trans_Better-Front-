import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbonementComponent } from './add-abonement.component';

describe('AddAbonementComponent', () => {
  let component: AddAbonementComponent;
  let fixture: ComponentFixture<AddAbonementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAbonementComponent]
    });
    fixture = TestBed.createComponent(AddAbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
