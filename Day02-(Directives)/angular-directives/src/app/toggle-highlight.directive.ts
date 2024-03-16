import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggleHighlight]',
  standalone: true
})
export class ToggleHighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }

}
