import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotTransferSub1Component } from './report-business-not-transfer-sub1.component';

describe('ReportBusinessNotTransferSub1Component', () => {
  let component: ReportBusinessNotTransferSub1Component;
  let fixture: ComponentFixture<ReportBusinessNotTransferSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotTransferSub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotTransferSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
