import { TestBed } from '@angular/core/testing';

import { ConnectDirectService } from './connect-direct.service';

describe('ConnectDirectService', () => {
  let service: ConnectDirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectDirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
