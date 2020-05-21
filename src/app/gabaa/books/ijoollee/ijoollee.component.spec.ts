import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IjoolleeComponent } from './ijoollee.component';

describe('IjoolleeComponent', () => {
  let component: IjoolleeComponent;
  let fixture: ComponentFixture<IjoolleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IjoolleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IjoolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
