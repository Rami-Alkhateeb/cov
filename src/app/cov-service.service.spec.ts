import { TestBed } from '@angular/core/testing';

import { CovServiceService } from './cov-service.service';

describe('CovServiceService', () => {
  let service: CovServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
