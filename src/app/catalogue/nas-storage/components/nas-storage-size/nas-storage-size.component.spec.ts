import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasStorageSizeComponent } from './nas-storage-size.component';

describe('NasStorageSizeComponent', () => {
  let component: NasStorageSizeComponent;
  let fixture: ComponentFixture<NasStorageSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasStorageSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasStorageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
