import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2CreateFormComponent } from './step2-create-form.component';

describe('Step2CreateFormComponent', () => {
  let component: Step2CreateFormComponent;
  let fixture: ComponentFixture<Step2CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step2CreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
