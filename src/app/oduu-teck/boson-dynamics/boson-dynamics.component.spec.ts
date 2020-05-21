import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BosonDynamicsComponent } from './boson-dynamics.component';

describe('BosonDynamicsComponent', () => {
  let component: BosonDynamicsComponent;
  let fixture: ComponentFixture<BosonDynamicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BosonDynamicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BosonDynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
