import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCh01Component } from './search-ch01.component';

describe('SearchCh01Component', () => {
  let component: SearchCh01Component;
  let fixture: ComponentFixture<SearchCh01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCh01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCh01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
