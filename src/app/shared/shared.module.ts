import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../main/navbar/navbar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SearchBarComponent } from '../main/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
