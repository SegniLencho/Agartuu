import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoosamaComponent } from './asoosama.component';

describe('AsoosamaComponent', () => {
  let component: AsoosamaComponent;
  let fixture: ComponentFixture<AsoosamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoosamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoosamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
