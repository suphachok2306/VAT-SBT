import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderComponent } from './consider.component';

describe('ConsiderComponent', () => {
  let component: ConsiderComponent;
  let fixture: ComponentFixture<ConsiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
