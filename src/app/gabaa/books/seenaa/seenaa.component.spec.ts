import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenaaComponent } from './seenaa.component';

describe('SeenaaComponent', () => {
  let component: SeenaaComponent;
  let fixture: ComponentFixture<SeenaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
