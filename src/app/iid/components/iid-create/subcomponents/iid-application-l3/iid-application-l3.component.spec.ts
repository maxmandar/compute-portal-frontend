import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidApplicationL3Component } from './iid-application-l3.component';

describe('IidApplicationL3Component', () => {
  let component: IidApplicationL3Component;
  let fixture: ComponentFixture<IidApplicationL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidApplicationL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidApplicationL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
