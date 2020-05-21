import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EresourcesComponent } from './eresources.component';

describe('EresourcesComponent', () => {
  let component: EresourcesComponent;
  let fixture: ComponentFixture<EresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
