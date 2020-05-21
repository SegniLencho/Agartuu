import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaaComponent } from './gabaa.component';

describe('GabaaComponent', () => {
  let component: GabaaComponent;
  let fixture: ComponentFixture<GabaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
