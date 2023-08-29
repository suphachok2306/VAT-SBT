import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderRequestComponent } from './consider-request.component';

describe('ConsiderRequestComponent', () => {
  let component: ConsiderRequestComponent;
  let fixture: ComponentFixture<ConsiderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsiderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
