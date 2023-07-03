import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssqlDbAppTempSizeComponent } from './mssql-db-app-temp-size.component';

describe('MssqlDbAppTempSizeComponent', () => {
  let component: MssqlDbAppTempSizeComponent;
  let fixture: ComponentFixture<MssqlDbAppTempSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MssqlDbAppTempSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MssqlDbAppTempSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
