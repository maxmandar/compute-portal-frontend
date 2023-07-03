import { TestBed } from '@angular/core/testing';

import { ServerDetailService } from './server-detail.service';

describe('ServerDetailService', () => {
  let service: ServerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
