import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssqlDbTransLogSizeComponent } from './mssql-db-trans-log-size.component';

describe('MssqlDbTransLogSizeComponent', () => {
  let component: MssqlDbTransLogSizeComponent;
  let fixture: ComponentFixture<MssqlDbTransLogSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MssqlDbTransLogSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MssqlDbTransLogSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
