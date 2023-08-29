import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApproveComponent } from './search-approve.component';

describe('SearchApproveComponent', () => {
  let component: SearchApproveComponent;
  let fixture: ComponentFixture<SearchApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
