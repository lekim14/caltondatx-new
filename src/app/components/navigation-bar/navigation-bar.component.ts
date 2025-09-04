import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  @Input() active: string = '';
  toogleMenu(event: any){
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    mobileMenu?.classList.toggle('hidden');
    mobileMenu?.classList.add('grid')
    mobileMenu?.classList.add('z-45');
    overlay?.classList.toggle('hidden');
  }

  isActive(link: string){
    return this.active === link ? 'text-blue-600' : 'text-gray-600'
  }

  goto(){
    
  }
}
