import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGoldVatApproveComponent } from './report-gold-vat-approve.component';

describe('ReportGoldVatApproveComponent', () => {
  let component: ReportGoldVatApproveComponent;
  let fixture: ComponentFixture<ReportGoldVatApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGoldVatApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGoldVatApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
