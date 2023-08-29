import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessUserRemoveSub1Component } from './report-business-user-remove-sub1.component';

describe('ReportBusinessUserRemoveSub1Component', () => {
  let component: ReportBusinessUserRemoveSub1Component;
  let fixture: ComponentFixture<ReportBusinessUserRemoveSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessUserRemoveSub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessUserRemoveSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
