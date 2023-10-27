import { TestBed } from '@angular/core/testing';

import { MoyenTransportService } from './moyen-transport.service';

describe('MoyenTransportService', () => {
  let service: MoyenTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoyenTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
