import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { VAnimateOnViewDirective } from '../../directives/v-animate-on-view.directive';

@Component({
  selector: 'app-resources',
  imports: [NavigationBarComponent, FooterComponent, VAnimateOnViewDirective],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  selectedResource: string = 'All Resources';
  resources = [
    { id: 1, name: 'All Resources' },
    { id: 2, name: 'White Papers' },
    { id: 3, name: 'Case Studies' },
    { id: 4, name: 'Industry Reports' },
    { id: 5, name: 'Guides & Tutorials' },
    { id: 6, name: 'Webinars' },
    { id: 7, name: 'Tools & Calculators' },
  ];

  resourcesData = [
    {
      name: 'WHITEPAPER',
      subName: 'Nov 2024',
      title: 'Computer Vision in Retail Analytics',
      description: 'Deep dive into how AI-powered computer vision is transforming retail foot traffic analysis and customer behavior insights.',
      subInfo: '24 pages',
      subInfo2: '847 downloads',
      button: 'Download PDF',
      icons: '',
      color: '#9333ea'
    },
    {
      name: 'CASE STUDY',
      subName: 'IPG Media',
      title: 'Smart City Traffic Optimization',
      description: 'How IPG Media Brands used our vehicle analytics to optimize digital billboard placements across metropolitan areas.',
      subInfo: '16 pages',
      subInfo2: '1,234 downloads',
      button: 'Read Case Study',
      icons: '',
      color: '#16a34a'
    },
    {
      name: 'INDUSTRY REPORT',
      subName: 'Q4 2024',
      title: '2024 OOH Advertising Trends',
      description: 'Comprehensive analysis of out-of-home advertising trends, including digital transformation and AI integration insights.',
      subInfo: '45 pages',
      subInfo2: '2,156 downloads',
      button: 'Download Report',
      icons: '',
      color: '#2563eb'
    },
    {
      name: 'GUIDE',
      subName: 'Beginner',
      title: 'Getting Started with AI Analytics',
      description: 'Step-by-step guide for implementing AI-powered audience measurement in your marketing campaigns.',
      subInfo: '12 pages',
      subInfo2: '3,421 downloads',
      button: 'Read Guide',
      icons: '',
      color: '#ea580c'
    },
    {
      name: 'WEBINAR',
      subName: 'Dec 15, 2024',
      title: 'AI-Powered Campaign Optimization',
      description: 'Live webinar covering advanced techniques for optimizing advertising campaigns using machine learning insights.',
      subInfo: '60 minutes',
      subInfo2: '1,876 registrations',
      button: 'Register Now',
      icons: '',
      color: '#dc2626'
    },
    {
      name: 'CALCULATOR',
      subName: 'Interactive Tool',
      title: 'ROI Impact Calculator',
      description: 'Interactive calculator to estimate the potential ROI improvement from implementing AI-powered audience analytics.',
      subInfo: 'Interactive',
      subInfo2: '5,432 uses',
      button: 'Use Calculator',
      icons: '',
      color: '#4f46e5'
    },
  ]
  handleResource(source: string){
    this.selectedResource = source;
  }
}
