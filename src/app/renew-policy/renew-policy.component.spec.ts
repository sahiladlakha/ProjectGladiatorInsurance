import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPolicyComponent } from './renew-policy.component';

describe('RenewPolicyComponent', () => {
  let component: RenewPolicyComponent;
  let fixture: ComponentFixture<RenewPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
