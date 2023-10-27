import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenTransportComponent } from './moyen-transport.component';

describe('MoyenTransportComponent', () => {
  let component: MoyenTransportComponent;
  let fixture: ComponentFixture<MoyenTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoyenTransportComponent]
    });
    fixture = TestBed.createComponent(MoyenTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
