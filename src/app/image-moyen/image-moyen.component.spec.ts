import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMoyenComponent } from './image-moyen.component';

describe('ImageMoyenComponent', () => {
  let component: ImageMoyenComponent;
  let fixture: ComponentFixture<ImageMoyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageMoyenComponent]
    });
    fixture = TestBed.createComponent(ImageMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
