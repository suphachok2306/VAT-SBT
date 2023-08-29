import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRp01Component } from './search-rp01.component';

describe('SearchRp01Component', () => {
  let component: SearchRp01Component;
  let fixture: ComponentFixture<SearchRp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRp01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
