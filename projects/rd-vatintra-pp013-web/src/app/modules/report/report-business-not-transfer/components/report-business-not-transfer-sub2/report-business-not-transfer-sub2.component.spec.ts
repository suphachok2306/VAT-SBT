import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotTransferSub2Component } from './report-business-not-transfer-sub2.component';

describe('ReportBusinessNotTransferSub2Component', () => {
  let component: ReportBusinessNotTransferSub2Component;
  let fixture: ComponentFixture<ReportBusinessNotTransferSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotTransferSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotTransferSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
