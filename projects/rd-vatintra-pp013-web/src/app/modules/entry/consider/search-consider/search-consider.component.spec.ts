import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConsiderComponent } from './search-consider.component';

describe('SearchConsiderComponent', () => {
  let component: SearchConsiderComponent;
  let fixture: ComponentFixture<SearchConsiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchConsiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
