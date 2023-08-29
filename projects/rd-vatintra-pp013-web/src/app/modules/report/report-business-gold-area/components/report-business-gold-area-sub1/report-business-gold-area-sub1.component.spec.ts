import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessGoldAreaSub1Component } from './report-business-gold-area-sub1.component';

describe('ReportBusinessGoldAreaSub1Component', () => {
  let component: ReportBusinessGoldAreaSub1Component;
  let fixture: ComponentFixture<ReportBusinessGoldAreaSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessGoldAreaSub1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessGoldAreaSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
