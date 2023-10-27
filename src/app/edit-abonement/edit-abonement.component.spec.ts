import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbonementComponent } from './edit-abonement.component';

describe('EditAbonementComponent', () => {
  let component: EditAbonementComponent;
  let fixture: ComponentFixture<EditAbonementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAbonementComponent]
    });
    fixture = TestBed.createComponent(EditAbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
