import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1CreateFormComponent } from './step1-create-form.component';

describe('Step1CreateFormComponent', () => {
  let component: Step1CreateFormComponent;
  let fixture: ComponentFixture<Step1CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step1CreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
