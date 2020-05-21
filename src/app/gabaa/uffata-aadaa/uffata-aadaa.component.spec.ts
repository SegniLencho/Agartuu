import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UffataAadaaComponent } from './uffata-aadaa.component';

describe('UffataAadaaComponent', () => {
  let component: UffataAadaaComponent;
  let fixture: ComponentFixture<UffataAadaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UffataAadaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UffataAadaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
