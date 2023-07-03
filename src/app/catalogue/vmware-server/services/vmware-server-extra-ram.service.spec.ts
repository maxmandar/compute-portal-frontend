import { TestBed } from '@angular/core/testing';

import { VmwareServerExtraRamService } from './vmware-server-extra-ram.service';

describe('VmwareServerExtraRamService', () => {
  let service: VmwareServerExtraRamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmwareServerExtraRamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
