import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidSecurityArchitectComponent } from './iid-security-architect.component';

describe('IidSecurityArchitectComponent', () => {
  let component: IidSecurityArchitectComponent;
  let fixture: ComponentFixture<IidSecurityArchitectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidSecurityArchitectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidSecurityArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
