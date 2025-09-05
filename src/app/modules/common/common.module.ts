import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../views/home/home.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { GetStartedComponent } from '../../views/get-started/get-started.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { AutoFocus } from 'primeng/autofocus';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ButtonModule,
    AutoFocus,
    RouterModule.forChild(routes)
  ],
})
export class CommonFeatureModule { }
