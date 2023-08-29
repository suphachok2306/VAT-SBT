import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdVatsbtintraLibComponent } from './rd-vatsbtintra-lib.component';

describe('RdVatsbtintraLibComponent', () => {
  let component: RdVatsbtintraLibComponent;
  let fixture: ComponentFixture<RdVatsbtintraLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdVatsbtintraLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdVatsbtintraLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
