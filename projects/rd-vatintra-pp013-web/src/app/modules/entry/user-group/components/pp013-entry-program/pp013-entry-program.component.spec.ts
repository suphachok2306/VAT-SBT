import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pp013EntryProgramComponent } from './pp013-entry-program.component';

describe('Pp013EntryProgramComponent', () => {
  let component: Pp013EntryProgramComponent;
  let fixture: ComponentFixture<Pp013EntryProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pp013EntryProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pp013EntryProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
