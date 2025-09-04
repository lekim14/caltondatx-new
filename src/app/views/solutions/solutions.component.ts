import { AfterViewInit, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { VScrollToDirective } from '../../directives/v-scroll-to.directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AnalyticsService } from '../../services/analytics.service';
import { AgeGroup, I_AgeGroup, I_PeopleAnalytics, I_VehicleAnalytics, I_VehicleType, VehicleTypes } from '../../interface/Analytics.I';

@Component({
  selector: 'app-solutions',
  imports: [NavigationBarComponent, FooterComponent, VScrollToDirective],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements AfterViewInit {
  breakDownData = [
    {
      label: '13-19',
      ageGroup: 'Teen',
      bar: 0,
      width: 'w-[22%]'
    },
    {
      label: '20-29',
      ageGroup: 'Young Adult',
      bar: 0,
      width: 'w-[35%]'
    },
    {
      label: '30-39',
      ageGroup: 'Adult',
      bar: 0,
      width: 'w-[28%]'
    },
    {
      label: '40-59',
      ageGroup: 'Middle Age',
      bar: 0,
      width: 'w-[15%]'
    },
    {
      label: '60+',
      ageGroup: 'Senior',
      bar: 0,
      width: 'w-[15%]'
    },
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
      extension: ''
    },
  ];

  vehicleClassification = [
    {
      label: 'Motorcycle',
      bar: 72,
      width: 'w-[72%]'
    },
    {
      label: 'Car',
      bar: 18,
      width: 'w-[18%]'
    },
    {
      label: 'Van',
      bar: 10,
      width: 'w-[10%]'
    },
    {
      label: 'Train',
      bar: 14,
      width: 'w-[14%]'
    },
    {
      label: 'Bus',
      bar: 17,
      width: 'w-[17%]'
    },
    {
      label: 'Truck',
      bar: 17,
      width: 'w-[17%]'
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
      description: 'Export analytics data in multiple formats including CSV, and PDF reports.',
      icon: '/assets/icons/file.webp'
    },
    {
      title: 'Web Socket',
      description: 'Real-Time Event Delivery Using Persistent WebSocket Connections.',
      icon: '/assets/icons/hooks.webp'
    },
  ];

  dashboardReports = [
    {
      value: '18,247',
      title: 'Total Impressions',
      percentage: '+12.5%'
    },
    {
      value: '4.8s',
      title: 'Avg. View Time',
      percentage: '+8.2%'
    },
    {
      value: '73%',
      title: 'Engagement Rate',
      percentage: '-2.1%'
    },
    {
      value: '$2,847',
      title: 'Revenue Impact',
      percentage: '+15.7%'
    },
  ]

  popularIntegrations = [
    {
      title: 'VCastplay',
      subTitle: 'Digital Signage Software',
    },
    // {
    //   title: 'Samsung MagicINFO',
    //   subTitle: 'Display Management',
    // },
    // {
    //   title: 'Google Analytics',
    //   subTitle: 'Web Analytics',
    // },
    // {
    //   title: 'Salesforce',
    //   subTitle: 'CRM Integration',
    // },
  ];

  shieldSVGGreen = `
  <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#56bc7c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#56bc7c" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#56bc7c" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;

  shieldSVGBlue = `
  <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#56bc7c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#2563eb" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#2563eb" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;

  sanitizedshieldSVGGreen: SafeHtml;
  sanitizedshieldSVGBlue: SafeHtml;
  peopleAnalytics: I_PeopleAnalytics = { 
    totalOTS: 0, 
    otsDuration: 0, 
    totalViewers: 0, 
    watcherDurations: 0, 
    engagementRate: 0, 
    averageAttentionTime: 0, 
    totalWatcher: 0 
  };

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private sanitizer: DomSanitizer,
    private analyticsService: AnalyticsService
  ){
    this.sanitizedshieldSVGGreen = this.sanitizer.bypassSecurityTrustHtml(this.shieldSVGGreen);
    this.sanitizedshieldSVGBlue = this.sanitizer.bypassSecurityTrustHtml(this.shieldSVGBlue);
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if(fragment){
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment)
        })
      }
    });
    this.initializeData();
  }

  async initializeData(){
    await Promise.all([this.initPeopleAnalytics(), this.initTopAgeGroup(), this.initVehicleAnalytics(), this.initVehicleTypeCount()]);
  }

  initPeopleAnalytics(): void{
    this.analyticsService.getPeopleAnalytics().subscribe({
      next:(res: any) => {
        const response: I_PeopleAnalytics = res;
        // this.peopleAnalytics = res;
        this.analyticsData[0].value = response.totalViewers;
        this.analyticsData[1].value = response.averageAttentionTime;
        this.analyticsData[2].value = response.engagementRate;
      }
    })
  }

  initVehicleAnalytics(){
    this.analyticsService.getVehicleAnalytics().subscribe({
      next:(res: any) => {
        const response: I_VehicleAnalytics = res;
        this.vehicleAnalyticsData[0].value = response.totalCount || 0;
        this.vehicleAnalyticsData[1].value = response.averageSpeed || 0;
        this.vehicleAnalyticsData[2].value = response.averageDwellTime || 0;
      }
    })
  }

  initVehicleTypeCount(){
    this.analyticsService.getVehicleTypeCount().subscribe({
      next:(res: any) => {
        const response: I_VehicleType[] = res;
        this.vehicleClassification[0].bar = this.getVehicleType(VehicleTypes.MOTORCYCLE, response).total || 0;
        this.vehicleClassification[1].bar = this.getVehicleType(VehicleTypes.CAR, response).total || 0;
        this.vehicleClassification[2].bar = this.getVehicleType(VehicleTypes.VAN, response).total || 0;
        this.vehicleClassification[3].bar = this.getVehicleType(VehicleTypes.TRAIN, response).total || 0;
        this.vehicleClassification[4].bar = this.getVehicleType(VehicleTypes.BUS, response).total || 0;
        this.vehicleClassification[5].bar = this.getVehicleType(VehicleTypes.TRUCK, response).total || 0;
        this.getTopVehicle(response);
      }
    })
  }
  getVehicleType(type: VehicleTypes, data: I_VehicleType[]){
    return data.filter(dat => dat.type === type)[0]
  }

  getTopVehicle(data: I_VehicleType[]){
    const top = Math.max(...data.map(age => age.total))
    // const top = data.reduce((max, vehicle) =>
    //   vehicle.total > max.total ? vehicle : max
    // );
    this.vehicleAnalyticsData[3].value = top || 0;
  }

  initTopAgeGroup(){
    this.analyticsService.getTopAgeGroup().subscribe({
      next:(res: any) => {
        const response: I_AgeGroup[] = res;
        // this.breakDownData[0].bar = this.getAgeGroupType(AgeGroup.CHILD, response).total;
        this.breakDownData[0].bar = this.getAgeGroupType(AgeGroup.TEEN, response).total || 0;
        this.breakDownData[1].bar = this.getAgeGroupType(AgeGroup.YOUNG_ADULT, response).total || 0;
        this.breakDownData[2].bar = this.getAgeGroupType(AgeGroup.ADULT, response).total || 0;
        this.breakDownData[3].bar = this.getAgeGroupType(AgeGroup.MIDDLE_AGE, response).total || 0;
        this.breakDownData[4].bar = this.getAgeGroupType(AgeGroup.SENIOR, response).total || 0;
        this.getTopAgeGroup(response);
      }
    })
  }

  getAgeGroupType(type: AgeGroup, data: I_AgeGroup[]){
    return data.filter(dat => dat.ageGroup === type)[0]
  }

  getTopAgeGroup(data: I_AgeGroup[]){
    // const top = Math.max(...data.map(age => age.total))
    const top = data.reduce((max, age) =>
      age.total > max.total ? age : max
    );
    this.analyticsData[3].value = this.breakDownData.filter(data => data.ageGroup === top.ageGroup)[0].label || '';
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
