import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTransferComponent } from './save-transfer.component';

describe('SaveTransferComponent', () => {
  let component: SaveTransferComponent;
  let fixture: ComponentFixture<SaveTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
