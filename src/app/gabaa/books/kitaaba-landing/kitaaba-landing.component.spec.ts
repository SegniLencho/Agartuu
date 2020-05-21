import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitaabaLandingComponent } from './kitaaba-landing.component';

describe('KitaabaLandingComponent', () => {
  let component: KitaabaLandingComponent;
  let fixture: ComponentFixture<KitaabaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitaabaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitaabaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
