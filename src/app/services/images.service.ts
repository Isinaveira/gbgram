import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private API_KEY = 'XpoH4qN3QpUAcSt-txzB5h6NQdhlEXOMuye-ZD_ppbs';
  private API_URL = `https://api.unsplash.com/search/photos/?client_id=${this.API_KEY}`;
  private DOWNLOAD_URL = `https://api.unsplash.com/search/photos`;

  searchImages(query:string, per_page:number, page:number): Observable<any>{
    const url = `${this.API_URL}&page=${page}&per_page=${per_page}&query=${query}`;
    return from(fetch(url)
    .then((response) => response.json()));
  }

  downloadImage(id:string){
    const url = `${this.DOWNLOAD_URL}/${id}/download`;
    return from(fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${this.API_KEY}`
      }
    })
    .then((response) => {
      if(!response.ok){
        throw new Error('Error'); 
      }else{
        return response.json();
      }
    }));
  }

}
