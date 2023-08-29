import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotApproveComponent } from './report-business-not-approve.component';

describe('ReportBusinessNotApproveComponent', () => {
  let component: ReportBusinessNotApproveComponent;
  let fixture: ComponentFixture<ReportBusinessNotApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
