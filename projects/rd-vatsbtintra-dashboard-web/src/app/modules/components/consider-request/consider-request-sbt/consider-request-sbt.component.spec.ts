import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderRequestSbtComponent } from './consider-request-sbt.component';

describe('ConsiderRequestSbtComponent', () => {
  let component: ConsiderRequestSbtComponent;
  let fixture: ComponentFixture<ConsiderRequestSbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderRequestSbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsiderRequestSbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
