import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormCompletedComponent } from './create-form-completed.component';

describe('CreateFormCompletedComponent', () => {
  let component: CreateFormCompletedComponent;
  let fixture: ComponentFixture<CreateFormCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
