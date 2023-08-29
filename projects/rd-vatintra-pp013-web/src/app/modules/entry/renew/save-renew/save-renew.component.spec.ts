import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRenewComponent } from './save-renew.component';

describe('SaveRenewComponent', () => {
  let component: SaveRenewComponent;
  let fixture: ComponentFixture<SaveRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
