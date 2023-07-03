import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmwareServerSizeComponent } from './vmware-server-size.component';

describe('VmwareServerSizeComponent', () => {
  let component: VmwareServerSizeComponent;
  let fixture: ComponentFixture<VmwareServerSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmwareServerSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmwareServerSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
