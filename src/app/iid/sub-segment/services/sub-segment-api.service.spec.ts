import { TestBed } from '@angular/core/testing';

import { SubSegmentApiService } from './sub-segment-api.service';

describe('SubSegmentApiService', () => {
  let service: SubSegmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSegmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
