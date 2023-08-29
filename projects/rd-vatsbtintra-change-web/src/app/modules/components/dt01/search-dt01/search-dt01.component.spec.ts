import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDt01Component } from './search-dt01.component';

describe('SearchDt01Component', () => {
  let component: SearchDt01Component;
  let fixture: ComponentFixture<SearchDt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDt01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
