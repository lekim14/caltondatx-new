import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnalyticsService } from '../../services/analytics.service';
import { NumberAnimComponent } from '../../components/number-anim/number-anim.component';

@Component({
  selector: 'app-industries',
  imports: [NavigationBarComponent, FooterComponent, NumberAnimComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent implements OnInit {
  dataAnalyzed = 0;
  industries = [
    {
      title: 'Retail & Consumer Goods',
      description: 'Consumer behavior analytics, market share measurement, and retail performance optimization.',
      data: [ 'Shopper journey analysis', 'Brand performance tracking', 'Market basket analysis' ],
      icon: '/assets/icons/bag.webp',
      color: '#447aef'
    },
    {
      title: 'Media & Entertainment',
      description: 'Audience measurement, content performance analytics, and advertising effectiveness.',
      data: [ 'Viewership analytics', 'Content optimization', 'Ad campaign measurement' ],
      icon: '/assets/icons/camera-recorder.webp',
      color: '#a24fed'
    },
    {
      title: 'Financial Services',
      description: 'Risk analytics, customer segmentation, and regulatory compliance solutions. ',
      data: [ 'Credit risk modeling', 'Fraud detection', 'Portfolio optimization' ],
      icon: '/assets/icons/dollar.webp',
      color: '#16a34a'
    },
    {
      title: 'Healthcare & Pharma',
      description: 'Patient outcomes analysis, clinical trial optimization, and market access insights. ',
      data: [ 'Clinical data analysis', 'Drug efficacy studies', 'Patient journey mapping' ],
      icon: '/assets/icons/heart.webp',
      color: '#e34e4e'
    },
    {
      title: 'Technology & Telecom',
      description: 'User behavior analytics, network optimization, and digital transformation insights. ',
      data: [ 'Network performance', 'User experience metrics', 'Digital Adoption tracking' ],
      icon: '/assets/icons/monitor.webp',
      color: '#655ee9'
    },
    {
      title: 'Automotive & Transport',
      description: 'Mobility analytics, supply chain optimization, and consumer preference insights. ',
      data: [ 'Fleet optimization', 'Route efficiency', 'Market demand forecasting' ],
      icon: '/assets/icons/transfer.webp',
      color: '#ca8a04'
    },
  ];

  doohKeyFeatures = [
    {
      title: 'OTS (Oppotunity to See)',
      description: 'Counts how many people and vehicles had the chance to view the ad.',
      icon: '/assets/icons/ots.webp'
    },
    {
      title: 'Audience Demographics',
      description: 'Detects gender and age brackets (without storing personal images, ensuring privacy compliance).',
      icon: '/assets/icons/audience.webp'
    },
    {
      title: 'People & Vehicle Watchers',
      description: 'Measures how many actually watched the content vs. just passing by.',
      icon: '/assets/icons/signal-green.webp'
    },
    {
      title: 'Dwell Time Analysis',
      description: 'Tracks how long an audience stays within ad visibility range.',
      icon: '/assets/icons/clock-orange.webp'
    },
    {
      title: 'Campaign Performance Reporting',
      description: 'Automated reports for advertisers and brands to prove ad effectiveness.',
      icon: '/assets/icons/sim.webp'
    },
    {
      title: 'Data Privacy Compliant',
      description: 'No image or video storage — only metadata and counts are processed.',
      icon: '/assets/icons/lock.webp'
    }
  ];

  physicalStoreKeyFeatures = [
    {
      title: 'Foot Traffic Monitoring',
      description: 'Count visitors entering and exiting the store.',
      icon: '/assets/icons/people-blue.webp'
    },
    {
      title: 'Heatmaps & Shopper Flow',
      description: 'Visualize how customers move inside the store, identifying hotspots and underutilized areas.',
      icon: '/assets/icons/map-violet.webp'
    },
    {
      title: 'Dwell Time Tracking',
      description: 'Measure how long shoppers stay in different zones.',
      icon: '/assets/icons/clock-green.webp'
    },
    {
      title: 'Repeat Visitor Estimation',
      description: 'Identify patterns of returning customers.',
      icon: '/assets/icons/refresh-orange.webp'
    },
    {
      title: 'Peak Hours Analysis',
      description: 'Track busiest times of the day/week/month.',
      icon: '/assets/icons/signal-blue.webp'
    },
    {
      title: 'POS Integration (Optional)',
      description: 'Correlates sales data with traffic insights to measure conversion rates.',
      icon: '/assets/icons/quick-orange.webp'
    },
    {
      title: 'Zone Performance',
      description: 'Compare different store sections for layout optimization.',
      icon: '/assets/icons/building-green.webp'
    },
    {
      title: 'Dashboard & Reports',
      description: 'Easy-to-use dashboard with downloadable insights for management decisions.',
      icon: '/assets/icons/sim-pink.webp'
    },
  ];
  
  constructor(private analyticsService: AnalyticsService){}

  ngOnInit(): void {
      this.analyticsService.getDataPoints().subscribe({
        next:(res: any) => {
          this.dataAnalyzed = res?.total || 0;
        }
      })
  }

}
