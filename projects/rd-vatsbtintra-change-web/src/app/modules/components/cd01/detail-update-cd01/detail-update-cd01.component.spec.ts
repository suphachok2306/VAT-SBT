import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUpdateCd01Component } from './detail-update-cd01.component';

describe('DetailUpdateCd01Component', () => {
  let component: DetailUpdateCd01Component;
  let fixture: ComponentFixture<DetailUpdateCd01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUpdateCd01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUpdateCd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
