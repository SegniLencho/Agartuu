import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCommentComponent } from './reusable-comment.component';

describe('ReusableCommentComponent', () => {
  let component: ReusableCommentComponent;
  let fixture: ComponentFixture<ReusableCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
