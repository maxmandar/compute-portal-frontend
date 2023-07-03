import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidItSystemRecoverabilityComponent } from './iid-it-system-recoverability.component';

describe('IidItSystemRecoverabilityComponent', () => {
  let component: IidItSystemRecoverabilityComponent;
  let fixture: ComponentFixture<IidItSystemRecoverabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidItSystemRecoverabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidItSystemRecoverabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
