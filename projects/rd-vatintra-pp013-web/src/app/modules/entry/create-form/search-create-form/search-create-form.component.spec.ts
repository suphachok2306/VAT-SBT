import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCreateFormComponent } from './search-create-form.component';

describe('SearchCreateFormComponent', () => {
  let component: SearchCreateFormComponent;
  let fixture: ComponentFixture<SearchCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
