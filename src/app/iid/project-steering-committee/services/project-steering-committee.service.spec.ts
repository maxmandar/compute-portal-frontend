import { TestBed } from '@angular/core/testing';

import { ProjectSteeringCommitteeService } from './project-steering-committee.service';

describe('ProjectSteeringCommitteeService', () => {
  let service: ProjectSteeringCommitteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSteeringCommitteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
