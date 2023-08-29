import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveConsiderComponent } from './save-consider.component';

describe('SaveConsiderComponent', () => {
  let component: SaveConsiderComponent;
  let fixture: ComponentFixture<SaveConsiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveConsiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
