import { TestBed } from '@angular/core/testing';

import { PifService } from './pif.service';

describe('PifService', () => {
  let service: PifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
