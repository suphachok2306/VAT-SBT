import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReportGoldVatApproveComponent } from './search-report-gold-vat-approve.component';

describe('SearchReportGoldVatApproveComponent', () => {
  let component: SearchReportGoldVatApproveComponent;
  let fixture: ComponentFixture<SearchReportGoldVatApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReportGoldVatApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReportGoldVatApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
