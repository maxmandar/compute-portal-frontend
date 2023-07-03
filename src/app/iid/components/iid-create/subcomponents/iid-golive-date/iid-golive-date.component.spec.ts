import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidGoliveDateComponent } from './iid-golive-date.component';

describe('IidGoliveDateComponent', () => {
  let component: IidGoliveDateComponent;
  let fixture: ComponentFixture<IidGoliveDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidGoliveDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidGoliveDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
