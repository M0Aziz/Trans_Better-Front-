import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonementComponent } from './abonement.component';

describe('AbonementComponent', () => {
  let component: AbonementComponent;
  let fixture: ComponentFixture<AbonementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbonementComponent]
    });
    fixture = TestBed.createComponent(AbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
