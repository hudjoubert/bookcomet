import { AngularMaterialModule } from './../../shared/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }
