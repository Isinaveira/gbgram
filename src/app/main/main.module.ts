import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearchResultComponent,
    PhotoCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    SharedModule
  ],
})
export class MainModule { }
