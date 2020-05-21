import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanMiidheEenyuuComponent } from './kan-miidhe-eenyuu.component';

describe('KanMiidheEenyuuComponent', () => {
  let component: KanMiidheEenyuuComponent;
  let fixture: ComponentFixture<KanMiidheEenyuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanMiidheEenyuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanMiidheEenyuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
