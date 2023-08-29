import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUpdateCh01Component } from './detail-update-ch01.component';

describe('DetailUpdateCh01Component', () => {
  let component: DetailUpdateCh01Component;
  let fixture: ComponentFixture<DetailUpdateCh01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUpdateCh01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUpdateCh01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
