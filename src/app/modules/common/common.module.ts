import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControl
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormControl
  ],
  providers: []
})
export class CommonFeatureModule { }
