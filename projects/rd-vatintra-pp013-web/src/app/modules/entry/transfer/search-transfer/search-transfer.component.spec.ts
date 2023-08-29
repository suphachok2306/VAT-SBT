import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransferComponent } from './search-transfer.component';

describe('SearchTransferComponent', () => {
  let component: SearchTransferComponent;
  let fixture: ComponentFixture<SearchTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
