import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRejectComponent } from './search-reject.component';

describe('SearchRejectComponent', () => {
  let component: SearchRejectComponent;
  let fixture: ComponentFixture<SearchRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
