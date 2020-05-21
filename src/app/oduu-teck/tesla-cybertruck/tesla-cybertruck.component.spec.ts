import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaCybertruckComponent } from './tesla-cybertruck.component';

describe('TeslaCybertruckComponent', () => {
  let component: TeslaCybertruckComponent;
  let fixture: ComponentFixture<TeslaCybertruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaCybertruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaCybertruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
