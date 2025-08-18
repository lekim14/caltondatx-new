import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-industries',
  imports: [NavigationBarComponent, FooterComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {

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
  ]

}
