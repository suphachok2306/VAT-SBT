import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRejectComponent } from './save-reject.component';

describe('SaveRejectComponent', () => {
  let component: SaveRejectComponent;
  let fixture: ComponentFixture<SaveRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
