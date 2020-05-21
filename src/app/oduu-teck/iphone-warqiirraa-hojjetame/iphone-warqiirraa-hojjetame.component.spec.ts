import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneWarqiirraaHojjetameComponent } from './iphone-warqiirraa-hojjetame.component';

describe('IphoneWarqiirraaHojjetameComponent', () => {
  let component: IphoneWarqiirraaHojjetameComponent;
  let fixture: ComponentFixture<IphoneWarqiirraaHojjetameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneWarqiirraaHojjetameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneWarqiirraaHojjetameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
