import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pp013userAddComponent } from './pp013user-add.component';

describe('Pp013userAddComponent', () => {
  let component: Pp013userAddComponent;
  let fixture: ComponentFixture<Pp013userAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pp013userAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pp013userAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
