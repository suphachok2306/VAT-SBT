import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerPropertyComponent } from './taxpayer-property.component';

describe('TaxpayerPropertyComponent', () => {
  let component: TaxpayerPropertyComponent;
  let fixture: ComponentFixture<TaxpayerPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxpayerPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxpayerPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
