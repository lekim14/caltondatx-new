import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ImageShadowDirective } from '../../directives/image-shadow.directive';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-get-started',
  imports: [NavigationBarComponent, ImageShadowDirective, FooterComponent],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent {
  
}
