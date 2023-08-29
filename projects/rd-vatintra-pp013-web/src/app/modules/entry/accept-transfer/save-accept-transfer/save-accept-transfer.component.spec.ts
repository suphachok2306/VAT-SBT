import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAcceptTransferComponent } from './save-accept-transfer.component';

describe('SaveAcceptTransferComponent', () => {
  let component: SaveAcceptTransferComponent;
  let fixture: ComponentFixture<SaveAcceptTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAcceptTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAcceptTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
