import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsuccessComponent } from './claimsuccess.component';

describe('ClaimsuccessComponent', () => {
  let component: ClaimsuccessComponent;
  let fixture: ComponentFixture<ClaimsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
