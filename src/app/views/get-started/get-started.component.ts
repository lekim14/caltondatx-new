import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { ImageShadowDirective } from '../../directives/image-shadow.directive';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../services/analytics.service';
import { Dialog } from 'primeng/dialog';
import { Button, ButtonDirective } from 'primeng/button';
import { PrimeNgModule } from '../../shared/primeng.module';
import { ModalComponent } from '../../components/modal/modal.component';
import { PrivacyPolicyComponent } from '../../components/privacy-policy/privacy-policy.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [NavigationBarComponent, ImageShadowDirective, FooterComponent, ReactiveFormsModule, CommonModule, ModalComponent, PrivacyPolicyComponent, RouterLink],
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  
  serviceType: string = '';
  sending: boolean = false;
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    businessEmail: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null),
    companyName: new FormControl(null, [Validators.required]),
    jobTitle: new FormControl(null),
    industry: new FormControl(null),
    project: new FormControl(null),
  });

  showModal = false;

  constructor(private analytics: AnalyticsService){}

  send(){
    const body = {
      "firstName": this.form.value?.firstName,
      "lastName": this.form.value?.lastName,
      "email": this.form.value?.businessEmail,
      "phoneNumber": this.form.value?.phoneNumber,
      "companyName": this.form.value?.companyName,
      "jobTitle": this.form.value?.jobTitle,
      "industry": this.form.value?.industry,
      "about": this.form.value?.project,
      "recaptchaToken": "sdfs",
      "type": this.serviceType
    }
    this.sending = true;
    this.analytics.email(body).subscribe({
      next:() => {
        this.sending = false;
      },
      error:() => {
        
      }
    })
  }

  handleServiceType(type: string){
    this.serviceType = type;
  }

}
