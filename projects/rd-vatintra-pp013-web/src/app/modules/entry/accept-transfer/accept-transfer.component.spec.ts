import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTransferComponent } from './accept-transfer.component';

describe('AcceptTransferComponent', () => {
  let component: AcceptTransferComponent;
  let fixture: ComponentFixture<AcceptTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
