import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectDirectComponent } from './connect-direct.component';

describe('ConnectDirectComponent', () => {
  let component: ConnectDirectComponent;
  let fixture: ComponentFixture<ConnectDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
