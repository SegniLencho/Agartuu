import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaaLandingComponent } from './gabaa-landing.component';

describe('GabaaLandingComponent', () => {
  let component: GabaaLandingComponent;
  let fixture: ComponentFixture<GabaaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabaaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
