import { TestBed } from '@angular/core/testing';

import { ApplicationCatalogueService } from './application-catalogue.service';

describe('EmployeeService', () => {
  let service: ApplicationCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
