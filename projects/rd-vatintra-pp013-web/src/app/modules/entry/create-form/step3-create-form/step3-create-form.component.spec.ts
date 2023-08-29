import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3CreateFormComponent } from './step3-create-form.component';

describe('Step3CreateFormComponent', () => {
  let component: Step3CreateFormComponent;
  let fixture: ComponentFixture<Step3CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step3CreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
