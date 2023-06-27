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
  URLREGION = environment.apiRegionEndpoint;
  URLCOUNTRY = environment.apiCountryEndpoint;

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {}

  getCountriesRegion(region: string): Observable<string[]> {
    return this.http.get<Country[]>(`${this.URLREGION}${region}`).pipe(
      map((paises: Country[]) =>
        paises.map((pais: Country) => {
          return pais.name.common;
        })
      )
    );
  }

  getCountry(country: string): Observable<Country> {
    return this.http.get<Country[]>(`${this.URLCOUNTRY}${country}`).pipe(
      map(([countryArray]: Country[]) => {
        return countryArray;
      })
    );
  }
}
