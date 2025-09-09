import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { VAnimateOnViewDirective } from '../../directives/v-animate-on-view.directive';
import { NumberAnimComponent } from '../../components/number-anim/number-anim.component';
import { Button, ButtonModule } from 'primeng/button';
import { CommonFeatureModule } from '../../modules/common/common.module';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { AnalyticsService } from '../../services/analytics.service';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-home',
  imports: [NavigationBarComponent, FooterComponent, VAnimateOnViewDirective, NumberAnimComponent, CarouselComponent, CommonModule, RouterLink, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, AfterViewChecked{

  showModal: boolean = false;
  private wasModalOpen = false;
  @ViewChild('modalVideo') modalVideo?: ElementRef<HTMLVideoElement>;
  constructor(private analyticsService: AnalyticsService){}

  clients = [
    { 
      name: 'New Balance', 
      industry: 'Global Athletic Brand',
      description: 'Calton Datx enables us to measure the impact of our billboard campaigns, providing valuable insights that help us assess the effectiveness of our investment.',
      ratings: 5,
      color: 'bg-green-600',
      image: '/assets/images/testimonials/new balance logo.png'
    },
    { 
      name: 'IPG Brands', 
      industry: 'Global Media Agency',
      description: 'When we recommend sites to clients, they often request additional data—especially traffic data—to evaluate if their investment is worthwhile. What sets Calton Datx apart is its up-to-date data, unlike other sources that rely on outdated figures.',
      ratings: 5,
      color: 'bg-purple-600',
      image: '/assets/images/testimonials/ipg media brands.png'
    },
    { 
      name: 'Dentsu', 
      industry: 'Leading Advertising Agency',
      description: `The Indoor Report is significant for me—it's a niche set of data that helps us understand demographics more. I have not met any data providers as detailed as Calton Datx.`,
      ratings: 5,
      color: 'bg-red-600',
      image: '/assets/images/testimonials/dentsu_logo.webp'
    },
    { 
      name: 'Spark', 
      industry: 'Media Solutions',
      description: `Calton DATx supports our campaigns by delivering the key metrics for out-of-home advertising: traffic count and impressions, which are crucial for measuring campaign effectiveness.`,
      ratings: 5,
      color: 'bg-violet-600',
      image: '/assets/images/testimonials/Spark Media Solutions.png'
    },
    { 
      name: 'UNILAB', 
      industry: 'Healthcare & Pharmaceuticals',
      description: `Calton DATx helps in our post campaign report to gauge efficiency of the sites.`,
      ratings: 5,
      color: 'bg-green-600',
      image: '/assets/images/testimonials/UNILAB.png'
    },
    { 
      name: 'The Huddle Room', 
      industry: 'Marketing & Advertising',
      description: `Calton DATx is highly beneficial to out-of-home advertising, providing detailed data and specific figures for targeted areas, helping us make more informed decisions.`,
      ratings: 5,
      color: 'bg-blue-600',
      image: '/assets/images/testimonials/The Huddle room.png'
    },
  ];

  insights = [
    {
      title: 'The Future of AI Audience Measurement',
      type: 'AI & Analytics',
      color: 'text-blue-600',
      description: 'Discover how artificial intelligence is revolutionizing the way we understand and measure audience behavior in 2024.',
      date: 'December 15, 2024',
      duration: '5 min read',
      icon: '/assets/icons/signal-bg.webp'
    },
    {
      title: 'How AI Analytics Boosted ROI by 300%',
      type: 'Case Study',
      color: 'text-green-600',
      description: `A comprehensive case study showing how our AI-powered vehicle analytics transformed a major retail chain's advertising strategy.`,
      date: 'December 12, 2024',
      duration: '8 min read',
      icon: '/assets/icons/lightning-bg.webp'
    },
    {
      title: '2024 People Analytics Trends Report',
      type: 'Industry Report',
      color: 'text-violet-600',
      description: `Our annual report reveals the latest trends in people analytics and what they mean for the future of audience measurement.`,
      duration: '12 min read',
      icon: '/assets/icons/location-bg.webp'
    },
  ];
  totalUsers: number = 0;
  totalDataPoints: number = 0;

  ngAfterViewInit(): void {
    this.initializeData();
  }

  ngAfterViewChecked() {
    // If the modal just opened
    if (this.showModal && !this.wasModalOpen) {
      this.wasModalOpen = true;

      // Try to play the video
      setTimeout(() => {
        if (this.modalVideo?.nativeElement) {
          const video = this.modalVideo.nativeElement;
          //video.currentTime = 0; // Optional: reset to start
          video.play().catch(err => {
            console.warn('Video play failed:', err);
          });
        }
      });
    }

    // Reset when modal is closed
    if (!this.showModal && this.wasModalOpen) {
      this.wasModalOpen = false;
    }
  }

  async initializeData(){
    await Promise.all([this.dataPoints(), this.registeredUsers()])
  }

  dataPoints(){
    this.analyticsService.getDataPoints().subscribe({
      next:(res: any) => {
        this.totalDataPoints = res.total;
      }
    })
  }

  registeredUsers(){
    this.analyticsService.getRegisteredUsers().subscribe({
      next:(res: any) => {
        this.totalUsers = res.total;
      }
    })
  }
  getEveryInitialLetter(name: string): string {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
  }

  randomColor(): string {
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  closeModal() {
    this.showModal = false;

    // Optional: Pause the video on close
    if (this.modalVideo?.nativeElement) {
      this.modalVideo.nativeElement.pause();
    }
  }

}
