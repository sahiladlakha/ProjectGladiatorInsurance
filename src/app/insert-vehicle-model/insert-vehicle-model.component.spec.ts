import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVehicleModelComponent } from './insert-vehicle-model.component';

describe('InsertVehicleModelComponent', () => {
  let component: InsertVehicleModelComponent;
  let fixture: ComponentFixture<InsertVehicleModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVehicleModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVehicleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
