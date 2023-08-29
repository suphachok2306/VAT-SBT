import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4CreateFormComponent } from './step4-create-form.component';

describe('Step4CreateFormComponent', () => {
  let component: Step4CreateFormComponent;
  let fixture: ComponentFixture<Step4CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4CreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
