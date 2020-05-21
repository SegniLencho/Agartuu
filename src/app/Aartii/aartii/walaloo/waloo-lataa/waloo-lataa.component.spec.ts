import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalooLataaComponent } from './waloo-lataa.component';

describe('WalooLataaComponent', () => {
  let component: WalooLataaComponent;
  let fixture: ComponentFixture<WalooLataaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalooLataaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalooLataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
