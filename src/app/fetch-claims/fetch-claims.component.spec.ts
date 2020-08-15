import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchClaimsComponent } from './fetch-claims.component';

describe('FetchClaimsComponent', () => {
  let component: FetchClaimsComponent;
  let fixture: ComponentFixture<FetchClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
