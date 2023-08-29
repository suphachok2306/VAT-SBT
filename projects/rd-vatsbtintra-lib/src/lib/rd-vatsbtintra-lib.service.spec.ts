import { TestBed } from '@angular/core/testing';

import { RdVatsbtintraLibService } from './rd-vatsbtintra-lib.service';

describe('RdVatsbtintraLibService', () => {
  let service: RdVatsbtintraLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdVatsbtintraLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
