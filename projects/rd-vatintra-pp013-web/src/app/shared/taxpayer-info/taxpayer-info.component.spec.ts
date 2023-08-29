import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerInfoComponent } from './taxpayer-info.component';

describe('TaxpayerInfoComponent', () => {
  let component: TaxpayerInfoComponent;
  let fixture: ComponentFixture<TaxpayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxpayerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxpayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
