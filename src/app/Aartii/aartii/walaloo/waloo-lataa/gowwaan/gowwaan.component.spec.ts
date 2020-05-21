import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GowwaanComponent } from './gowwaan.component';

describe('GowwaanComponent', () => {
  let component: GowwaanComponent;
  let fixture: ComponentFixture<GowwaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GowwaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GowwaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
