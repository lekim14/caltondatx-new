import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { VAnimateOnViewDirective } from '../../directives/v-animate-on-view.directive';
import { NumberAnimComponent } from '../../components/number-anim/number-anim.component';

@Component({
  selector: 'app-home',
  imports: [NavigationBarComponent, FooterComponent, VAnimateOnViewDirective, NumberAnimComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clients = [
    { 
      name: 'New Balance', 
      industry: 'Global Athletic Brand',
      description: 'Calton Datx enables us to measure the impact of our billboard campaigns, providing valuable insights that help us assess the effectiveness of our investment.',
      ratings: 5,
      color: 'bg-green-600',
    },
    { 
      name: 'IPG Brands', 
      industry: 'Global Media Agency',
      description: 'When we recommend sites to clients, they often request additional data—especially traffic data—to evaluate if their investment is worthwhile. What sets Calton Datx apart is its up-to-date data, unlike other sources that rely on outdated figures.',
      ratings: 5,
      color: 'bg-purple-600',
    },
    { 
      name: 'Dentsu', 
      industry: 'Leading Advertising Agency',
      description: `The Indoor Report is significant for me—it's a niche set of data that helps us understand demographics more. I have not met any data providers as detailed as Calton Datx.`,
      ratings: 5,
      color: 'bg-red-600',
    },
    { 
      name: 'Spark', 
      industry: 'Media Solutions',
      description: `Calton DATx supports our campaigns by delivering the key metrics for out-of-home advertising: traffic count and impressions, which are crucial for measuring campaign effectiveness.`,
      ratings: 5,
      color: 'bg-violet-600',
    },
    { 
      name: 'UNILAB', 
      industry: 'Healthcare & Pharmaceuticals',
      description: `Calton DATx helps in our post campaign report to gauge efficiency of the sites.`,
      ratings: 5,
      color: 'bg-green-600',
    },
    { 
      name: 'The Huddle Room', 
      industry: 'Marketing & Advertising',
      description: `Calton DATx is highly beneficial to out-of-home advertising, providing detailed data and specific figures for targeted areas, helping us make more informed decisions.`,
      ratings: 5,
      color: 'bg-blue-600',
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
    },
    {
      title: 'How AI Analytics Boosted ROI by 300%',
      type: 'Case Study',
      color: 'text-green-600',
      description: `A comprehensive case study showing how our AI-powered vehicle analytics transformed a major retail chain's advertising strategy.`,
      date: 'December 12, 2024',
      duration: '8 min read',
    },
    {
      title: '2024 People Analytics Trends Report',
      type: 'Industry Report',
      color: 'text-violet-600',
      description: `Our annual report reveals the latest trends in people analytics and what they mean for the future of audience measurement.`,
      duration: '12 min read',
    },
  ];


  getEveryInitialLetter(name: string): string {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
  }

  randomColor(): string {
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
