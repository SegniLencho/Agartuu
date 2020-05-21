import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaaffiifDeebiiCoronaComponent } from './gaaffiif-deebii-corona.component';

describe('GaaffiifDeebiiCoronaComponent', () => {
  let component: GaaffiifDeebiiCoronaComponent;
  let fixture: ComponentFixture<GaaffiifDeebiiCoronaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaaffiifDeebiiCoronaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaaffiifDeebiiCoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
