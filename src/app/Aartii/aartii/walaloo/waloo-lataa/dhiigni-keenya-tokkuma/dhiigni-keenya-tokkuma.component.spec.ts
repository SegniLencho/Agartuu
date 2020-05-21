import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhiigniKeenyaTokkumaComponent } from './dhiigni-keenya-tokkuma.component';

describe('DhiigniKeenyaTokkumaComponent', () => {
  let component: DhiigniKeenyaTokkumaComponent;
  let fixture: ComponentFixture<DhiigniKeenyaTokkumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhiigniKeenyaTokkumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhiigniKeenyaTokkumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
