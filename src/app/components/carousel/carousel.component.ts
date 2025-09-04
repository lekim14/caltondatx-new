import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonFeatureModule } from '../../modules/common/common.module';
import { Carousel, CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  currentIndex = 0;
  carouselInterval: any;
  ngOnInit(): void {
    this.carouselInterval = setInterval(() => {
      this.next(true);
    }, 2000);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
  }

  next(auto: boolean = false) {
    if(!auto) clearInterval(this.carouselInterval);
    this.currentIndex = (this.currentIndex + 1) % 3;
  }
}
