import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderCompletedComponent } from './consider-completed.component';

describe('ConsiderCompletedComponent', () => {
  let component: ConsiderCompletedComponent;
  let fixture: ComponentFixture<ConsiderCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsiderCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
