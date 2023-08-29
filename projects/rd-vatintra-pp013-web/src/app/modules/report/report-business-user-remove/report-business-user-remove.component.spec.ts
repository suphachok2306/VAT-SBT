import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBusinessUserRemoveComponent } from './report-business-user-remove.component';

describe('ReportBusinessUserRemoveComponent', () => {
  let component: ReportBusinessUserRemoveComponent;
  let fixture: ComponentFixture<ReportBusinessUserRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBusinessUserRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBusinessUserRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
