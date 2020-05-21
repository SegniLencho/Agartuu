import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiyaasaComponent } from './siyaasa.component';

describe('SiyaasaComponent', () => {
  let component: SiyaasaComponent;
  let fixture: ComponentFixture<SiyaasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiyaasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiyaasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
