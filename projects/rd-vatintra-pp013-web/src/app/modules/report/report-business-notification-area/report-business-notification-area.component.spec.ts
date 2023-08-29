import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotificationAreaComponent } from './report-business-notification-area.component';

describe('ReportBusinessNotificationAreaComponent', () => {
  let component: ReportBusinessNotificationAreaComponent;
  let fixture: ComponentFixture<ReportBusinessNotificationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotificationAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotificationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
