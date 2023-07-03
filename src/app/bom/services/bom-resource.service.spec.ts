import { TestBed } from '@angular/core/testing';

import { BomResourceService } from './bom-resource.service';

describe('BomResourceService', () => {
  let service: BomResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BomResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
