import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareServerCreateComponent } from './vmware-server-create.component';

describe('VmwareServerCreateComponent', () => {
  let component: VmwareServerCreateComponent;
  let fixture: ComponentFixture<VmwareServerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmwareServerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareServerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
