import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanStorageTypeComponent } from './san-storage-type.component';

describe('SanStorageTypeComponent', () => {
  let component: SanStorageTypeComponent;
  let fixture: ComponentFixture<SanStorageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanStorageTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanStorageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
