import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApproveDt01Component } from './detail-approve-dt01.component';

describe('DetailApproveDt01Component', () => {
  let component: DetailApproveDt01Component;
  let fixture: ComponentFixture<DetailApproveDt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApproveDt01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailApproveDt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
