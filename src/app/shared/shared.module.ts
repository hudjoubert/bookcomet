import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HeaderModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HeaderModule
  ]
})
export class SharedModule { }
