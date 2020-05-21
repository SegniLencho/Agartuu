import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidhaaDabalataaComponent } from './hidhaa-dabalataa.component';

describe('HidhaaDabalataaComponent', () => {
  let component: HidhaaDabalataaComponent;
  let fixture: ComponentFixture<HidhaaDabalataaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidhaaDabalataaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidhaaDabalataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
