import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareServerOsComponent } from './vmware-server-os.component';

describe('VmwareServerOsComponent', () => {
  let component: VmwareServerOsComponent;
  let fixture: ComponentFixture<VmwareServerOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmwareServerOsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareServerOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
