import { TestBed } from '@angular/core/testing';

import { SegmentApiService } from './segment-api.service';

describe('SegmentApiService', () => {
  let service: SegmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
