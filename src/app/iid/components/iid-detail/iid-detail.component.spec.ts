import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidDetailComponent } from './iid-detail.component';

describe('IidDetailComponent', () => {
  let component: IidDetailComponent;
  let fixture: ComponentFixture<IidDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
