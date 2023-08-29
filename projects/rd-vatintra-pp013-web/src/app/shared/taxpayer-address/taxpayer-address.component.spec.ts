import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerAddressComponent } from './taxpayer-address.component';

describe('TaxpayerAddressComponent', () => {
  let component: TaxpayerAddressComponent;
  let fixture: ComponentFixture<TaxpayerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxpayerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxpayerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
