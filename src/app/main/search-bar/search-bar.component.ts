import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchTerm: string = '';
  constructor( private router: Router){}

  onSubmit(){
    if(this.searchTerm.trim() != ''){
      this.router.navigate([`${this.router.url}/search`, this.searchTerm]);
    }
  }
}


