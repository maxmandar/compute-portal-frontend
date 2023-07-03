import { TestBed } from '@angular/core/testing';

import { BigFixApiService } from './big-fix-api.service';

describe('BigFixApiService', () => {
  let service: BigFixApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFixApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
