import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageData } from 'src/app/models/ImageData';
import { saveAs } from 'file-saver';
import { Location } from '@angular/common';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  imageObject!: ImageData;
  url_download!: string;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private imageService: ImagesService
  ){}

  ngOnInit(){

    //Obtengo el objeto imageObject del estado de la navegación
    const navigationState = window.history.state;
    this.imageObject = navigationState?.imageObject;
    this.url_download = navigationState?.imageObject.links.download;
    console.log(this.imageObject);
  }

  downloadPhoto(){
    if(this.url_download){
      this.imageService.downloadImage(this.imageObject.id)
    }
  }
  goBack(){
    this.location.back();
  }
}
