import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'calton';

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }
}
