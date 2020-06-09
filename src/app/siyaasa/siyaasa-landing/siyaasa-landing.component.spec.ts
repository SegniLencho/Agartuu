import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiyaasaLandingComponent } from './siyaasa-landing.component';

describe('SiyaasaLandingComponent', () => {
  let component: SiyaasaLandingComponent;
  let fixture: ComponentFixture<SiyaasaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiyaasaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiyaasaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
