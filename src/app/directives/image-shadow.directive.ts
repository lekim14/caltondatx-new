import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2
} from '@angular/core';
import ColorThief from 'colorthief';

@Directive({
  selector: '[appImageShadow]',
})
export class ImageShadowDirective implements AfterViewInit {
  private colorThief = new ColorThief();

  constructor(private el: ElementRef<HTMLImageElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const img = this.el.nativeElement;

    if (!img.crossOrigin) {
      // CORS is required for ColorThief to work properly
      this.renderer.setAttribute(img, 'crossorigin', 'anonymous');
    }

    if (img.complete) {
      this.applyShadow(img);
    } else {
      img.onload = () => this.applyShadow(img);
    }
  }

  private applyShadow(img: HTMLImageElement): void {
    try {
      const color = this.colorThief.getColor(img); // [r, g, b]
      const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      this.renderer.setStyle(img, 'filter', `drop-shadow(2px 2px 10px ${rgb})`);
    } catch (error) {
      console.warn('Could not extract image color for shadow:', error);
      // Optional fallback shadow
      this.renderer.setStyle(img, 'filter', `drop-shadow(4px 4px 10px rgba(0,0,0,0.2))`);
    }
  }
}
