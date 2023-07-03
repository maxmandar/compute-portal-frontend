import { TestBed } from '@angular/core/testing';

import { IidService } from './iid.service';

describe('IidService', () => {
  let service: IidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
