import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5CreateFormComponent } from './step5-create-form.component';

describe('Step5CreateFormComponent', () => {
  let component: Step5CreateFormComponent;
  let fixture: ComponentFixture<Step5CreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step5CreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step5CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
