import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewFromPrevPolicyComponent } from './renew-from-prev-policy.component';

describe('RenewFromPrevPolicyComponent', () => {
  let component: RenewFromPrevPolicyComponent;
  let fixture: ComponentFixture<RenewFromPrevPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewFromPrevPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewFromPrevPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
