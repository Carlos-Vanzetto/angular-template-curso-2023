import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { map} from 'rxjs/operators';
import { Country } from 'src/app/modules/country/interfaces/country.interface';
import { environment } from '@environment';
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  URLREGION = environment.apiRegionEndpoint;
  URLCOUNTRY = environment.apiCountryEndpoint;

  constructor(private http: HttpClient) {}

  getCountriesRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URLREGION}${region}`).pipe(
      map( countries =>  countries.filter((pais: Country) => pais.independent === true))
    );
  }

  getCountry(country: string): Observable< Country | null > {
    let URL: string;
    if ((country.length === 2 && country.toUpperCase() === country) || country.length === 3 ) {
      URL = `${this.URLCOUNTRY}alpha/${country}`;
    } else {
      URL = `${this.URLCOUNTRY}translation/${country}`;
    }

    return this.http.get<Country[]>(URL).pipe(
      map( countries => countries.filter((pais: Country) => pais.independent === true)),
      map( countries => countries.length > 0 ? countries[0] : null),
      catchError( ()=> of(null) ),
      delay (1500)
    );
  }
}
