import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaDbBinLogFileSizeComponent } from './maria-db-bin-log-file-size.component';

describe('MariaDbBinLogFileSizeComponent', () => {
  let component: MariaDbBinLogFileSizeComponent;
  let fixture: ComponentFixture<MariaDbBinLogFileSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariaDbBinLogFileSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariaDbBinLogFileSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
