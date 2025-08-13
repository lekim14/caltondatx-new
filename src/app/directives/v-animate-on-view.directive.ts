import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[vAnimateOnView]',
})
export class VAnimateOnViewDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Immediately check if element is visible on load
    if (this.isElementInViewport(this.el.nativeElement)) {
      this.animate();
      return; // skip observing if already animated
    }

    // Otherwise observe scroll to animate when entering viewport later
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate();
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate() {
    this.renderer.addClass(this.el.nativeElement, 'animate-slideInUp');
  }

  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
