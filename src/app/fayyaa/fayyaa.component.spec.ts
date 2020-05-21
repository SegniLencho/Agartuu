import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FayyaaComponent } from './fayyaa.component';

describe('FayyaaComponent', () => {
  let component: FayyaaComponent;
  let fixture: ComponentFixture<FayyaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FayyaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FayyaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
