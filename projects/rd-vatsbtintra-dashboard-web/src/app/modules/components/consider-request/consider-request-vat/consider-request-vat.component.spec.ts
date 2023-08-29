import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderRequestVatComponent } from './consider-request-vat.component';

describe('ConsiderRequestVatComponent', () => {
  let component: ConsiderRequestVatComponent;
  let fixture: ComponentFixture<ConsiderRequestVatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderRequestVatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsiderRequestVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
