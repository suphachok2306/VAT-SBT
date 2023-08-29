import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessNotTransferComponent } from './report-business-not-transfer.component';

describe('ReportBusinessNotTransferComponent', () => {
  let component: ReportBusinessNotTransferComponent;
  let fixture: ComponentFixture<ReportBusinessNotTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessNotTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessNotTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
