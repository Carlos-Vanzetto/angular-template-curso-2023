import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable, map } from 'rxjs';
import { Article, New } from 'src/app/models/new';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  URLNEW = environment.apiNew;
  URLNEWKEY = environment.apiNewKey;

  constructor( private http:HttpClient) { }

  getNews(country: string, page: number) : Observable<New>{
    return this.http.get<New>(`${this.URLNEW}${country}&pageSize=4&page=${page}${this.URLNEWKEY}`) 
  }
}
