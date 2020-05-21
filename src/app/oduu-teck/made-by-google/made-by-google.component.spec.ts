import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeByGoogleComponent } from './made-by-google.component';

describe('MadeByGoogleComponent', () => {
  let component: MadeByGoogleComponent;
  let fixture: ComponentFixture<MadeByGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeByGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeByGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
