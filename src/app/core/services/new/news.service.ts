import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable, map } from 'rxjs';
import { Article, New } from 'src/app/modules/country/interfaces/new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  URLNEW = environment.apiNew;
  API_NEW_KEY = environment.apiNewKey;

  constructor( private http:HttpClient) { }

  getNews(country: string, page: number) : Observable<New>{

    const params = new HttpParams()
      .set('apiKey', this.API_NEW_KEY )
      .set('country',  country)
      .set('pageSize', '4')
      .set('page', page)

    return this.http.get<New>(`${this.URLNEW}`, {params}) 
  }
}
