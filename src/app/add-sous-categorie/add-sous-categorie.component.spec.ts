import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousCategorieComponent } from './add-sous-categorie.component';

describe('AddSousCategorieComponent', () => {
  let component: AddSousCategorieComponent;
  let fixture: ComponentFixture<AddSousCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSousCategorieComponent]
    });
    fixture = TestBed.createComponent(AddSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
