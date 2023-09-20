import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchTerm: string = '';
  constructor( private router: Router){}

  onSubmit(){
    if(this.searchTerm.trim() != ''){
      if(!this.router.url.includes('main')){
        this.router.navigate([`${this.router.url}/search`, this.searchTerm]);

      }else{
        this.router.navigate(['/main/search', this.searchTerm]);
      }
    }
  }
}


