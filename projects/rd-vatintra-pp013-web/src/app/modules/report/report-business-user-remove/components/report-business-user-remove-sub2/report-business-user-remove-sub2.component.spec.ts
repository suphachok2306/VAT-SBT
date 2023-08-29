import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessUserRemoveSub2Component } from './report-business-user-remove-sub2.component';

describe('ReportBusinessUserRemoveSub2Component', () => {
  let component: ReportBusinessUserRemoveSub2Component;
  let fixture: ComponentFixture<ReportBusinessUserRemoveSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessUserRemoveSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessUserRemoveSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
