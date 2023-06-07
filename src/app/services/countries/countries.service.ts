import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/models/country';
import { APP_SERVICE_CONFIG } from 'src/app/appConfig/appconfig.service';
import { AppConfig } from 'src/app/appConfig/appconfig.interface';
import { HttpOptions } from 'src/app/models/http-options.interface';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {}
  httpOptions: HttpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'afb3a2e979msha203c2eba94c7f9p18175cjsnab9fbd22596b',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    }),
    params: { limit: 10 },
  };

  getCountries() {
    return this.http.get<any>(this.config.apiEndpoint + '/countries', this.httpOptions).pipe(
      map((res) => {
        const countries: Country[] = res.data;
        let countryNames: string[] = countries.map((country: any) => country.name);
        return { countries, countryNames };
      })
    );
  }
}
