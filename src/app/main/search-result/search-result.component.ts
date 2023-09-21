import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { ImageData } from 'src/app/models/ImageData';
import { filter } from 'rxjs';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  @ViewChild('scrollButton', {static:false}) scrollButton?: ElementRef;

  searchTerm: string = '';
  images: any[] = [];
  total_pages: number = 0;
  total_images: number = 0;
  showScrollButton = false;
  currentPage: number = 1;
  
  constructor(
    private route: ActivatedRoute,
    private imagesService: ImagesService,
    private el: ElementRef,
    private router: Router
    ) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.searchImages(1);
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
    });
    this.searchImages(1);
    
  }


  searchImages(page: number){
    if(this.searchTerm.trim() != '' && this.searchTerm){
      this.imagesService.searchImages(this.searchTerm, 10, page)
      .subscribe({
          next: (data: any) => {
            console.log(data.results.length);
            this.total_pages = data.total_pages;
            this.total_images = data.total;
            if( page === 1){
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

            }else{

              const newImages = data.results.map((image: ImageData) => ({
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
              }))
              this.images = [...this.images, ...newImages];
              this.applyFadeInToNewItems(newImages);
            }
          },
          error: (error) => {
            console.error('Error while trying to obtain data from Unsplash API', error)
          },     
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verificar si se debe mostrar el botón
    const navbarElement = this.el.nativeElement.querySelector('navbar');
    const navbarRect = navbarElement.getBoundingClientRect();
    this.showScrollButton = navbarRect.bottom < 0;
    
    if(this.scrollButton){
      if (this.showScrollButton) {
        this.scrollButton.nativeElement.classList.add('show');
      } else {
        this.scrollButton.nativeElement.classList.remove('show');
      }
    }
    
    if(this.currentPage < this.total_pages && this.isAtBottom()){
      console.log("ABAJO")
      this.currentPage ++;
      this.searchImages(this.currentPage);
    }

  }

  applyFadeInToNewItems(newItems: any[]) {
    // Obtén la lista de elementos <li> recién agregados
    const listItems = document.querySelectorAll('.results-grid li');
  
    // Aplica la clase .fade-in a los elementos recién agregados
    newItems.forEach((_, index) => {
      listItems[this.images.length - newItems.length + index].classList.add('fade-in');
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  isAtBottom(): boolean {
    const element = this.el.nativeElement;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const contentHeight = element.offsetHeight;

    // Define a threshold (e.g., 100 pixels) to trigger the load more action
    const threshold = 100;

    return windowHeight + scrollY >= contentHeight - threshold;
  }


}
