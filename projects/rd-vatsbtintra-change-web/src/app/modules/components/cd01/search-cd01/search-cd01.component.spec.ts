import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCd01Component } from './search-cd01.component';

describe('SearchCd01Component', () => {
  let component: SearchCd01Component;
  let fixture: ComponentFixture<SearchCd01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCd01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
