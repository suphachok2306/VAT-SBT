import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReportBusinessNotApproveComponent } from './search-report-business-not-approve.component';

describe('SearchReportBusinessNotApproveComponent', () => {
  let component: SearchReportBusinessNotApproveComponent;
  let fixture: ComponentFixture<SearchReportBusinessNotApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReportBusinessNotApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReportBusinessNotApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
