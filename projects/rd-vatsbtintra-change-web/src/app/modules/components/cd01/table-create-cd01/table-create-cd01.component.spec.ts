import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateCd01Component } from './table-create-cd01.component';

describe('TableCreateCd01Component', () => {
  let component: TableCreateCd01Component;
  let fixture: ComponentFixture<TableCreateCd01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCreateCd01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreateCd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
