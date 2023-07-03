import { TestBed } from '@angular/core/testing';

import { ConnectDirectApiService } from './connect-direct-api.service';

describe('ConnectDirectApiService', () => {
  let service: ConnectDirectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectDirectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
