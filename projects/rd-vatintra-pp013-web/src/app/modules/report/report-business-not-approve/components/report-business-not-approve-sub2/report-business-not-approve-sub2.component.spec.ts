import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotApproveSub2Component } from './report-business-not-approve-sub2.component';

describe('ReportBusinessNotApproveSub2Component', () => {
  let component: ReportBusinessNotApproveSub2Component;
  let fixture: ComponentFixture<ReportBusinessNotApproveSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotApproveSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotApproveSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
