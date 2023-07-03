import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidDomainArchitectComponent } from './iid-domain-architect.component';

describe('IidDomainArchitectComponent', () => {
  let component: IidDomainArchitectComponent;
  let fixture: ComponentFixture<IidDomainArchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidDomainArchitectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidDomainArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
