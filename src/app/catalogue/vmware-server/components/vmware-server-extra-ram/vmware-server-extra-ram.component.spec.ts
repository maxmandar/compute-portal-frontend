import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareServerExtraRamComponent } from './vmware-server-extra-ram.component';

describe('VmwareServerExtraRamComponent', () => {
  let component: VmwareServerExtraRamComponent;
  let fixture: ComponentFixture<VmwareServerExtraRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmwareServerExtraRamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareServerExtraRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
