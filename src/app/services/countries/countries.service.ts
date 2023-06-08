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
      'X-RapidAPI-Key': this.config.xRapidApiKey,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    }),
    params: { limit: 10, offset: 15 },
  };

  getCountryList(region: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.config.xRapidApiKeyGraphQL,
      'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
    });

    const body = `query={
      countries(region:${region},first:10,orderBy:population_desc){
        name
        population
      }
    }`;

    return this.http.post('https://geodb-cities-graphql.p.rapidapi.com/', body, {
      headers: headers,
    });
  }

  getCountriesProxy() {
    return this.http.get('http://localhost/8000/countries/').pipe(map((res) => console.log(res)));
  }

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
