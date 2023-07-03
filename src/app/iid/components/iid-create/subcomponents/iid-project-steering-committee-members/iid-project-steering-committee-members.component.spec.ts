import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidProjectSteeringCommitteeMembersComponent } from './iid-project-steering-committee-members.component';

describe('IidProjectSteeringCommitteeMembersComponent', () => {
  let component: IidProjectSteeringCommitteeMembersComponent;
  let fixture: ComponentFixture<IidProjectSteeringCommitteeMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidProjectSteeringCommitteeMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidProjectSteeringCommitteeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
