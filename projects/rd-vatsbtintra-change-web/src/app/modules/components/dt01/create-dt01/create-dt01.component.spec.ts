import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDt01Component } from './create-dt01.component';

describe('CreateDt01Component', () => {
  let component: CreateDt01Component;
  let fixture: ComponentFixture<CreateDt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDt01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
