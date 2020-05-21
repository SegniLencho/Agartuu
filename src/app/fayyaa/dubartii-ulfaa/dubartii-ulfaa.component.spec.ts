import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DubartiiUlfaaComponent } from './dubartii-ulfaa.component';

describe('DubartiiUlfaaComponent', () => {
  let component: DubartiiUlfaaComponent;
  let fixture: ComponentFixture<DubartiiUlfaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DubartiiUlfaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DubartiiUlfaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
