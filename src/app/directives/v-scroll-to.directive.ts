import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[vScrollTo]',
})
export class VScrollToDirective {
  @Input('vScrollTo') targetSelector!: string; // e.g. '#features' or '.my-section'

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    if (!this.targetSelector) return;

    const target = document.querySelector(this.targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`vScrollTo: Element not found for selector "${this.targetSelector}"`);
    }
  }
}
