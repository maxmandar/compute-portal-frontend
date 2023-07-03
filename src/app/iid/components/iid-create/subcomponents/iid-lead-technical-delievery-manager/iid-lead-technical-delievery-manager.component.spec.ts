import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidLeadTechnicalDelieveryManagerComponent } from './iid-lead-technical-delievery-manager.component';

describe('IidLeadTechnicalDelieveryManagerComponent', () => {
  let component: IidLeadTechnicalDelieveryManagerComponent;
  let fixture: ComponentFixture<IidLeadTechnicalDelieveryManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidLeadTechnicalDelieveryManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidLeadTechnicalDelieveryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
