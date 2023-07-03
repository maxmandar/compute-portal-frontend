import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareServerCostComponent } from './vmware-server-cost.component';

describe('VmwareServerCostComponent', () => {
  let component: VmwareServerCostComponent;
  let fixture: ComponentFixture<VmwareServerCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmwareServerCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareServerCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
