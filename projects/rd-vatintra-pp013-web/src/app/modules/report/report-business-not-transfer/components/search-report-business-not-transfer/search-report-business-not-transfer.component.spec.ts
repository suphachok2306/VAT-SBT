import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReportBusinessNotTransferComponent } from './search-report-business-not-transfer.component';

describe('SearchReportBusinessNotTransferComponent', () => {
  let component: SearchReportBusinessNotTransferComponent;
  let fixture: ComponentFixture<SearchReportBusinessNotTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReportBusinessNotTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReportBusinessNotTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
