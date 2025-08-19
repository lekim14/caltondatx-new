import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { VAnimateOnViewDirective } from '../../directives/v-animate-on-view.directive';
import { debounceTime } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonFeatureModule } from '../../modules/common/common.module';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  imports: [NavigationBarComponent, FooterComponent, VAnimateOnViewDirective, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css',
})
export class ResourcesComponent implements OnInit, AfterViewInit{
  selectedResource: string = 'All Resources';
  query = new FormControl('');
  resources = [
    { id: 1, name: 'All Resources' },
    { id: 2, name: 'White Papers' },
    { id: 3, name: 'Case Studies' },
    { id: 4, name: 'Industry Reports' },
    { id: 5, name: 'Guides & Tutorials' },
    { id: 6, name: 'Webinars' },
    { id: 7, name: 'Tools & Calculators' },
  ];
  resourcesData: any[];
  initResourcesData = [
    {
      name: 'WHITEPAPER',
      subName: 'Nov 2024',
      title: 'Computer Vision in Retail Analytics',
      description: 'Deep dive into how AI-powered computer vision is transforming retail foot traffic analysis and customer behavior insights.',
      subInfo: '24 pages',
      subInfo2: '847 downloads',
      button: 'Download PDF',
      icon: '/assets/icons/file.webp',
      color: '#9333ea',
      type: 'White Papers'
    },
    {
      name: 'CASE STUDY',
      subName: 'IPG Media',
      title: 'Smart City Traffic Optimization',
      description: 'How IPG Media Brands used our vehicle analytics to optimize digital billboard placements across metropolitan areas.',
      subInfo: '16 pages',
      subInfo2: '1,234 downloads',
      button: 'Read Case Study',
      icon: '/assets/icons/signal-green.webp',
      color: '#16a34a',
      type: 'Case Studies'
    },
    {
      name: 'INDUSTRY REPORT',
      subName: 'Q4 2024',
      title: '2024 OOH Advertising Trends',
      description: 'Comprehensive analysis of out-of-home advertising trends, including digital transformation and AI integration insights.',
      subInfo: '45 pages',
      subInfo2: '2,156 downloads',
      button: 'Download Report',
      icon: '/assets/icons/chart.webp',
      color: '#2563eb',
      type: 'Industry Reports'
    },
    {
      name: 'GUIDE',
      subName: 'Beginner',
      title: 'Getting Started with AI Analytics',
      description: 'Step-by-step guide for implementing AI-powered audience measurement in your marketing campaigns.',
      subInfo: '12 pages',
      subInfo2: '3,421 downloads',
      button: 'Read Guide',
      icon: '/assets/icons/guide.webp',
      color: '#ea580c',
      type: 'Guides & Tutorials'
    },
    {
      name: 'WEBINAR',
      subName: 'Dec 15, 2024',
      title: 'AI-Powered Campaign Optimization',
      description: 'Live webinar covering advanced techniques for optimizing advertising campaigns using machine learning insights.',
      subInfo: '60 minutes',
      subInfo2: '1,876 registrations',
      button: 'Register Now',
      icon: '/assets/icons/camera-recorder-red.webp',
      color: '#dc2626',
      type: 'Webinars'
    },
    {
      name: 'CALCULATOR',
      subName: 'Interactive Tool',
      title: 'ROI Impact Calculator',
      description: 'Interactive calculator to estimate the potential ROI improvement from implementing AI-powered audience analytics.',
      subInfo: 'Interactive',
      subInfo2: '5,432 uses',
      button: 'Use Calculator',
      icon: '/assets/icons/calculator.webp',
      color: '#4f46e5',
      type: 'Tools & Calculators'
    },
  ];

  featuredResources = [
    {
      name: 'FEATURED WHITEPAPER',
      subName: 'Published December 2024',
      title: 'The Future of AI in Audience Measurement: 2025 Predictions',
      description: 'Comprehensive analysis of emerging AI technologies and their impact on audience analytics. Includes machine learning trends, computer vision advances, and predictive modeling innovations.',
      subInfo: '32 pages',
      subInfo2: '15 min read',
      subInfo3: '2,847 downloads',
      button: 'Download PDF',
      icon: '/assets/icons/file-blue.webp',
      color: '#2563eb'
    },
    {
      name: 'FEATURED CASE STUDY',
      subName: 'New Balance Campaign',
      title: 'How AI Analytics Increased Billboard ROI by 340%',
      description: 'Detailed case study showing how New Balance leveraged our AI-powered people and vehicle analytics to optimize their outdoor advertising campaigns across 15 major cities.',
      subInfo: '18 pages',
      subInfo2: '12 min read',
      subInfo3: '1,923 downloads',
      button: 'Read Case Study',
      icon: '/assets/icons/signal-green-bg.webp',
      color: '#16a34a'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ){
    this.resourcesData = [...this.initResourcesData];
  }

  ngOnInit() {
    this.query.valueChanges
      .pipe(debounceTime(200)) // waits 200ms after typing stops
      .subscribe(value => {
        this.handleSearchResource(value);
      });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if(fragment){
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment)
        })
      }
    })
  }
  handleResource(source: string){
    this.selectedResource = source;
    if(source === 'All Resources'){
      this.resourcesData = this.initResourcesData;
    }else{
      this.resourcesData = this.initResourcesData.filter(res => res.type === source);
    }
  }

  handleSearchResource(value: any){
    const query = value.toLowerCase();
    this.resourcesData = this.initResourcesData.filter(item =>
      Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(query)
      )
    )
  }
}
