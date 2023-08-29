import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAcceptTransferComponent } from './search-accept-transfer.component';

describe('SearchAcceptTransferComponent', () => {
  let component: SearchAcceptTransferComponent;
  let fixture: ComponentFixture<SearchAcceptTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAcceptTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAcceptTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
