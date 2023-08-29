import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessGoldAreaSub2Component } from './report-business-gold-area-sub2.component';

describe('ReportBusinessGoldAreaSub2Component', () => {
  let component: ReportBusinessGoldAreaSub2Component;
  let fixture: ComponentFixture<ReportBusinessGoldAreaSub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessGoldAreaSub2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessGoldAreaSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
