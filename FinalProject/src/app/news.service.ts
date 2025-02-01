import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getNews():Observable<any>{
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=743e4db1ff4b46e3906245acc0e33f84')
  }
}
