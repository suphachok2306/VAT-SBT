import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateCh01Component } from './table-create-ch01.component';

describe('TableCreateCh01Component', () => {
  let component: TableCreateCh01Component;
  let fixture: ComponentFixture<TableCreateCh01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCreateCh01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreateCh01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
