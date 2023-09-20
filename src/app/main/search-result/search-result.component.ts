import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { ImageData } from 'src/app/models/ImageData';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  searchTerm: any;
  images: any[] = [];
  total_pages: number = 0;
  actual_page: number = 0;
  constructor(
    private route: ActivatedRoute,
    private imagesService: ImagesService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
    });
    this.searchImages();
    
  }


  searchImages(){
    if(this.searchTerm.trim() != ''){
      this.imagesService.searchImages(this.searchTerm, 10)
      .subscribe({
          next: (data: any) => {
            this.images = data.results.map((image: ImageData) => ({
              id: image.id,
              created_at: image.created_at,
              width: image.width,
              height: image.height,
              color : image.color,
              description: image.description,
              alt_description: image.alt_description,
              urls: image.urls,
              links: image.links,
              likes: image.likes,
              user: image.user,
              tags: image.tags
            }));
          },
          error: (error) => {
            console.error('Error while trying to obtain data from Unsplash API', error)
          },     
      });
    }
  }
}
