import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimdisplayComponent } from './claimdisplay.component';

describe('ClaimdisplayComponent', () => {
  let component: ClaimdisplayComponent;
  let fixture: ComponentFixture<ClaimdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
