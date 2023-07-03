import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanStorageAppBinarySizeComponent } from './san-storage-app-binary-size.component';

describe('SanStorageAppBinarySizeComponent', () => {
  let component: SanStorageAppBinarySizeComponent;
  let fixture: ComponentFixture<SanStorageAppBinarySizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanStorageAppBinarySizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanStorageAppBinarySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
