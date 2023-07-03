import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidProjectSteeringComponent } from './iid-project-steering.component';

describe('IidProjectSteeringComponent', () => {
  let component: IidProjectSteeringComponent;
  let fixture: ComponentFixture<IidProjectSteeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidProjectSteeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidProjectSteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
