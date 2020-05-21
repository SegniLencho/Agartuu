import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AartiiComponent } from './aartii.component';

describe('AartiiComponent', () => {
  let component: AartiiComponent;
  let fixture: ComponentFixture<AartiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AartiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AartiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
