import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateRp01Component } from './table-create-rp01.component';

describe('TableCreateRp01Component', () => {
  let component: TableCreateRp01Component;
  let fixture: ComponentFixture<TableCreateRp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCreateRp01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreateRp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
