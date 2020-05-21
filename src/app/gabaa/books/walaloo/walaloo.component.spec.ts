import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalalooComponent } from './walaloo.component';

describe('WalalooComponent', () => {
  let component: WalalooComponent;
  let fixture: ComponentFixture<WalalooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalalooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalalooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
