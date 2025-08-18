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
      icon: '/assets/icons/arrow-up.webp',
    },
    {
      title: 'Vehicle Classification',
      description: 'Automatically identify and categorize different vehicle types to tailor your advertising content for specific audiences.',
      icon: '/assets/icons/truck.webp',
    },
    {
      title: 'Speed & Dwell Metrics',
      description: 'Measure vehicle speeds and dwell times to understand optimal content duration and display visibility windows.',
      icon: '/assets/icons/clock.webp',
    },
  ];

  hardwareCompability = [
    {
      title: 'Camera Recorders',
      description: 'Full compatibility with IP cameras, CCTV systems, and smart recording devices',
      icon: '/assets/icons/camera-recorder-gray.webp'
    },
    {
      title: 'VCast Players',
      description: 'Seamless integration with VCast media players and streaming devices',
      icon: '/assets/icons/monitor-gray.webp'
    },
    {
      title: 'Display Flexibility',
      description: 'Support for all display types and configurations with adaptive scaling',
      icon: '/assets/icons/monitor-gray.webp'
    }
  ];

  platformAccessibility = [
    {
      title: 'Mobile Access',
      description: 'Full-featured mobile apps for IOS and Android with real-time monitoring and alerts',
      icon: '/assets/icons/mobile-gray.webp'
    },
    {
      title: 'Desktop Interface',
      description: 'Comprehensive desktop application with advanced analytics and management tools',
      icon: '/assets/icons/monitor-gray.webp'
    },
    {
      title: 'Admin PC Access',
      description: 'Dedicated admin interface with enterprise controls, user management, and system configuration',
      icon: '/assets/icons/settings-gray.webp'
    },
  ];

  caltonInstallation = [
    {
      title: 'Web-Based Platform',
      description: 'Access from any browser, no installation required',
      icon: '/assets/icons/pie-gray.webp'
    },
    {
      title: 'Google Play',
      description: 'Download from Google Play for Android devices',
      icon: '/assets/icons/mobile-gray.webp'
    },
    {
      title: 'Apple App Store',
      description: 'Available on IOS App Store for iPhone and iPad',
      icon: '/assets/icons/mobile-gray.webp'
    },
    {
      title: 'Instant Updates',
      description: 'Automatic updates across all platform with zero downtime',
      icon: '/assets/icons/refresh-gray.webp'
    },
  ];

  apiConnectivity = [
    {
      title: 'REST API',
      description: 'Full REST API access for custom integrations and data synchronization.',
      icon: '/assets/icons/terminal.webp'
    },
    {
      title: 'CMS Integration',
      description: 'Compatible with major digital signage CMS platforms and content management systems.',
      icon: '/assets/icons/dashboard.webp'
    },
    {
      title: 'Data Export',
      description: 'Export analytics data in multiple formats including CSV, JSON, and PDF reports.',
      icon: '/assets/icons/file.webp'
    },
    {
      title: 'Web Socket',
      description: 'Real-time data streaming via webhooks for instant notifications and triggers.',
      icon: '/assets/icons/hooks.webp'
    },
  ];

  popularIntegrations = [
    {
      title: 'BrightSign',
      subTitle: 'Media Players',
    },
    {
      title: 'Samsung MagicINFO',
      subTitle: 'Display Management',
    },
    {
      title: 'Google Analytics',
      subTitle: 'Web Analytics',
    },
    {
      title: 'Salesforce',
      subTitle: 'CRM Integration',
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
