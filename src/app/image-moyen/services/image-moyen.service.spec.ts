import { TestBed } from '@angular/core/testing';

import { ImageMoyenService } from './image-moyen.service';

describe('ImageMoyenService', () => {
  let service: ImageMoyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageMoyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
