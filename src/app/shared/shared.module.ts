import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
