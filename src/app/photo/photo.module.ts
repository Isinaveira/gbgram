import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    SharedModule
  ]
})
export class PhotoModule { }
