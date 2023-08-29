import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDt01Component } from './detail-dt01.component';

describe('DetailDt01Component', () => {
  let component: DetailDt01Component;
  let fixture: ComponentFixture<DetailDt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDt01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
