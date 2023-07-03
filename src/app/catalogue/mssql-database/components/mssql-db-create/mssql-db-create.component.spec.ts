import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssqlDbCreateComponent } from './mssql-db-create.component';

describe('MssqlDbCreateComponent', () => {
  let component: MssqlDbCreateComponent;
  let fixture: ComponentFixture<MssqlDbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MssqlDbCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MssqlDbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
