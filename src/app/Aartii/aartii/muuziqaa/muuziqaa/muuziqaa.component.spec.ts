import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuuziqaaComponent } from './muuziqaa.component';

describe('MuuziqaaComponent', () => {
  let component: MuuziqaaComponent;
  let fixture: ComponentFixture<MuuziqaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuuziqaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuuziqaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
