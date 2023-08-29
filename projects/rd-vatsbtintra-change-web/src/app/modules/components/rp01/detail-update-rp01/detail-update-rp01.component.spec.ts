import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUpdateRp01Component } from './detail-update-rp01.component';

describe('DetailUpdateRp01Component', () => {
  let component: DetailUpdateRp01Component;
  let fixture: ComponentFixture<DetailUpdateRp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUpdateRp01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUpdateRp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
