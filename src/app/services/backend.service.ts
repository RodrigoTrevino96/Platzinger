import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  API_KEY: string = "baaeb325-989e-4c71-8928-ef198f137a39";
  API_ENDPOINT: string = "https://api.thecatapi.com/v1";

  constructor(private httpClient: HttpClient) { }

  /* GET */
  getCatBreed(breed: string) {
    return this.httpClient.get(
      this.API_ENDPOINT + `/breeds/search?q=${breed}`
    );
  }
  getImageCatBreed(breed: string) {
    return this.httpClient.get(
      this.API_ENDPOINT + `/images/search?breed_id=${breed}`
    );
  }

  /* POST */
  // post(this.heroesUrl, hero, httpOptions)
  save(catImg: object) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.API_KEY
    });

    return this.httpClient
      .post(
        this.API_ENDPOINT + '/images/upload', // URL
        catImg, // hero
        {   // httpOptions
          headers: headers,
        });
  }

  /* DELETE */
  delete(id: string) {
    return this.httpClient
      .delete(`${this.API_ENDPOINT}/images/${id}`);
  }

  /* PUT */
  // put(movie) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-api-key': this.API_KEY
  //   });

  //   return this.httpClient
  //     .put(
  //       this.API_ENDPOINT + '/movies/' + movie.id,
  //       movie,
  //       {
  //         headers: headers
  //       });
  // }
}
