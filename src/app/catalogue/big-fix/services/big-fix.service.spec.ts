import { TestBed } from '@angular/core/testing';

import { BigFixService } from './big-fix.service';

describe('BigFixService', () => {
  let service: BigFixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
