import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesByStaffComponent } from './changes-by-staff.component';

describe('ChangesByStaffComponent', () => {
  let component: ChangesByStaffComponent;
  let fixture: ComponentFixture<ChangesByStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesByStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesByStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
