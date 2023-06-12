import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/models/country';
import { APP_SERVICE_CONFIG } from 'src/app/appConfig/appconfig.service';
import { AppConfig } from 'src/app/appConfig/appconfig.interface';
import { HttpOptions } from 'src/app/models/http-options.interface';
import { environment } from '@environment';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  URL = environment.apiEndpoint;

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {}

  getCountriesRegion(region : string) : Observable<any> {
    return this.http.get(`${this.URL}${region}`).pipe(
      map((paises:any)=>paises.map((pais: any)=>{
        return pais.name.common
      }))
    ) 
}

}