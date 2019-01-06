import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get("http://api.icndb.com/jokes/random");
  }
}
