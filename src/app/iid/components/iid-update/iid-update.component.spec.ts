import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidUpdateComponent } from './iid-update.component';

describe('IidUpdateComponent', () => {
  let component: IidUpdateComponent;
  let fixture: ComponentFixture<IidUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
