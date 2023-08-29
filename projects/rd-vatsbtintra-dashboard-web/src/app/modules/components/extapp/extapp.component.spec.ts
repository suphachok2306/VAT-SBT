import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtappComponent } from './extapp.component';

describe('ExtappComponent', () => {
  let component: ExtappComponent;
  let fixture: ComponentFixture<ExtappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
