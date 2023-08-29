import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessGoldReceiveComponent } from './report-business-gold-receive.component';

describe('ReportBusinessGoldAreaComponent', () => {
  let component: ReportBusinessGoldReceiveComponent;
  let fixture: ComponentFixture<ReportBusinessGoldReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessGoldReceiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessGoldReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
