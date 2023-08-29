import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveApproveComponent } from './save-approve.component';

describe('SaveApproveComponent', () => {
  let component: SaveApproveComponent;
  let fixture: ComponentFixture<SaveApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
