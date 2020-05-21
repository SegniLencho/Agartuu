import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[appNavBar]',
  host: {
    '(click)': 'onClick()'
  }
})

export class NavBarDirective {
  @Input() parent;

  onClick(): void {
    if (this.parent.burger) {
      this.parent.hide();
    }
  }

constructor(el: ElementRef) {
  let nativeEl = el.nativeElement;
  if (nativeEl.tagName === "A") {
    nativeEl.className += 'nav-link';
  }
}
}