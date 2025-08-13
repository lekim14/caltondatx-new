import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [NavigationBarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
