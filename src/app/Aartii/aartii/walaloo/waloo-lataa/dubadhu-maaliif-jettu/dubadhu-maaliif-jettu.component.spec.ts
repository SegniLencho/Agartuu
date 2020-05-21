import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DubadhuMaaliifJettuComponent } from './dubadhu-maaliif-jettu.component';

describe('DubadhuMaaliifJettuComponent', () => {
  let component: DubadhuMaaliifJettuComponent;
  let fixture: ComponentFixture<DubadhuMaaliifJettuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DubadhuMaaliifJettuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DubadhuMaaliifJettuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
