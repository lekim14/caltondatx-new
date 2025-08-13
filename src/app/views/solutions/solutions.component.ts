import { AfterViewInit, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { VScrollToDirective } from '../../directives/v-scroll-to.directive';

@Component({
  selector: 'app-solutions',
  imports: [NavigationBarComponent, FooterComponent, VScrollToDirective],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements AfterViewInit {

  breakDownData = [
    {
      label: '18-24 years',
      bar: 22,
      width: 'w-[22%]'
    },
    {
      label: '25-34 years',
      bar: 35,
      width: 'w-[35%]'
    },
    {
      label: '35-44 years',
      bar: 28,
      width: 'w-[28%]'
    },
    {
      label: '45+ years',
      bar: 15,
      width: 'w-[15%]'
    }
  ];

  analyticsData = [
    {
      label: 'Total Viewers Today',
      value: 2847,
      color: 'text-blue-500',
      extension: ''
    },
    {
      label: 'Avg. Attention Time',
      value: 4.2,
      color: 'text-blue-500',
      extension: 's'
    },
    {
      label: 'Engagement Rate',
      value: 68,
      color: 'text-green-600',
      extension: '%'
    },
    {
      label: 'Top Age Group',
      value: '25-34',
      color: 'text-blue-500',
      extension: ''
    },
  ];

  vehicleAnalyticsData = [
    {
      label: 'Vehicles Today',
      value: 15432,
      color: 'text-white',
      extension: ''
    },
    {
      label: 'Avg. Speed',
      value: 45,
      color: 'text-[#86efac]',
      extension: 'mph'
    },
    {
      label: 'Ave. Dwell Time',
      value: 3.8,
      color: 'text-[#93c5fd]',
      extension: 's'
    },
    {
      label: 'Car vs Trucks',
      value: 72,
      color: 'text-white',
      extension: '%'
    },
  ];

  vehicleClassification = [
    {
      label: 'Passenger Cars',
      bar: 72,
      width: 'w-[72%]'
    },
    {
      label: 'SUVs',
      bar: 18,
      width: 'w-[18%]'
    },
    {
      label: 'Trucks',
      bar: 10,
      width: 'w-[10%]'
    }
  ];

  displayPerformance = [
    {
      title: 'Traffic Flow Analysis',
      description: 'Monitor vehicle volume, peak hours, and traffic patterns to optimize your display scheduling and content timing.',
      icon: '',
    },
    {
      title: 'Vehicle Classification',
      description: 'Automatically identify and categorize different vehicle types to tailor your advertising content for specific audiences.',
      icon: '',
    },
    {
      title: 'Speed & Dwell Metrics',
      description: 'Measure vehicle speeds and dwell times to understand optimal content duration and display visibility windows.',
      icon: '',
    },
  ];

  hardwareCompability = [
    {
      title: 'Camera Recorders',
      description: 'Full compatibility with IP cameras, CCTV systems, and smart recording devices',
      icon: ''
    },
    {
      title: 'VCast Players',
      description: 'Seamless integration with VCast media players and streaming devices',
      icon: ''
    },
    {
      title: 'Display Flexibility',
      description: 'Support for all display types and configurations with adaptive scaling',
      icon: ''
    }
  ];

  platformAccessibility = [
    {
      title: 'Mobile Access',
      description: 'Full-featured mobile apps for IOS and Android with real-time monitoring and alerts',
      icon: ''
    },
    {
      title: 'Desktop Interface',
      description: 'Comprehensive desktop application with advanced analytics and management tools',
      icon: ''
    },
    {
      title: 'Admin PC Access',
      description: 'Dedicated admin interface with enterprise controls, user management, and system configuration',
      icon: ''
    },
  ];

  caltonInstallation = [
    {
      title: 'Web-Based Platform',
      description: 'Access from any browser, no installation required',
      icon: ''
    },
    {
      title: 'Google Play',
      description: 'Download from Google Play for Android devices',
      icon: ''
    },
    {
      title: 'Apple App Store',
      description: 'Available on IOS App Store for iPhone and iPad',
      icon: ''
    },
    {
      title: 'Instant Updates',
      description: 'Automatic updates across all platform with zero downtime',
      icon: ''
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ){}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if(fragment){
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment)
        })
      }
    })
  }

  formatNumber(value: number | string): string {
    if(typeof value === 'string') return value;
    return value.toLocaleString(); 
  }

  getColorByPercentage(percentage: number): string {
    if (percentage < 20) {
      return 'bg-red-500';
    } else if (percentage < 40) {
      return 'bg-yellow-500';
    } else if (percentage < 60) {
      return 'bg-green-500';
    } else if (percentage < 80) {
      return 'bg-blue-500';
    } else {
      return 'bg-purple-500';
    }
  }

}
