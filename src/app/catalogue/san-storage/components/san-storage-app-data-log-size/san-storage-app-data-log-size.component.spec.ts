import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanStorageAppDataLogSizeComponent } from './san-storage-app-data-log-size.component';

describe('SanStorageAppDataLogSizeComponent', () => {
  let component: SanStorageAppDataLogSizeComponent;
  let fixture: ComponentFixture<SanStorageAppDataLogSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanStorageAppDataLogSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanStorageAppDataLogSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
