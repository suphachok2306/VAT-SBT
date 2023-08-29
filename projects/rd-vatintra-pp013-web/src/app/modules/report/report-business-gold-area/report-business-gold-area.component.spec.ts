import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessGoldAreaComponent } from './report-business-gold-area.component';

describe('ReportBusinessGoldAreaComponent', () => {
  let component: ReportBusinessGoldAreaComponent;
  let fixture: ComponentFixture<ReportBusinessGoldAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessGoldAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessGoldAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
