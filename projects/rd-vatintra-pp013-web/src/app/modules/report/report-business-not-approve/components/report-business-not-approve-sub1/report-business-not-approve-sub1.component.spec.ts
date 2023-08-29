import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotApproveSub1Component } from './report-business-not-approve-sub1.component';

describe('ReportBusinessNotApproveSub1Component', () => {
  let component: ReportBusinessNotApproveSub1Component;
  let fixture: ComponentFixture<ReportBusinessNotApproveSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotApproveSub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotApproveSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
