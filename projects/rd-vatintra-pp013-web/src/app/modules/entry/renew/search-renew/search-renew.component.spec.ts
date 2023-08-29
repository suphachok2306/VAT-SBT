import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRenewComponent } from './search-renew.component';

describe('SearchRenewComponent', () => {
  let component: SearchRenewComponent;
  let fixture: ComponentFixture<SearchRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
