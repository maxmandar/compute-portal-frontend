import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidDeleteComponent } from './iid-delete.component';

describe('IidDeleteComponent', () => {
  let component: IidDeleteComponent;
  let fixture: ComponentFixture<IidDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IidDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
