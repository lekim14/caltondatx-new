import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-number-anim',
  templateUrl: './number-anim.component.html'
})
export class NumberAnimComponent implements OnInit, OnDestroy {
  @Input() targetNumber: number = 1000; // default target
  @Input() duration: number = 2000; // duration in ms

  displayNumber = 0;
  private startTimestamp: number | null = null;
  private rafId: number | null = null;

  ngOnInit() {
    this.startAnimation();
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  startAnimation(timestamp?: number) {
    if (!this.startTimestamp) this.startTimestamp = timestamp || performance.now();

    const progress = (timestamp || performance.now()) - this.startTimestamp;
    const progressRatio = Math.min(progress / this.duration, 1);

    this.displayNumber = Math.floor(this.targetNumber * progressRatio);

    if (progressRatio < 1) {
      this.rafId = requestAnimationFrame((ts) => this.startAnimation(ts));
    } else {
      this.displayNumber = this.targetNumber; // ensure exact final number
    }
  }
}
