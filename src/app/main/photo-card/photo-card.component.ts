import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImageData } from 'src/app/models/ImageData';
@Component({
  selector: 'photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent  {
  
  @ViewChild('imageContainer', {static: false})
  protected imageContainer!: ElementRef;


  @Input()  imageObject!: ImageData;
  @Input()  width!: number;
  @Input()  height!: number;
  @Input()  showUser!: boolean;
  @Input()  showLikes !: boolean;

  imageData: any;
  imageUrl!: string;

}
