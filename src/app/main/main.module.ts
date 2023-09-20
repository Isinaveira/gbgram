import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    HomeComponent,
    SearchResultComponent,
    PhotoCardComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
