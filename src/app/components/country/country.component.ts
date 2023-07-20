import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { Country } from 'src/app/models/country';
import { Article } from 'src/app/models/new';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { NewsService } from 'src/app/services/new/news.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  loading = false;
  flag!: string;
  name: string;
  timezones! : string[];
  country! : Country;
  altSpellings! : string;
  title! : string;
  nativeNameKey! : string[];
  nativeNameValue! : any[];
  tld! : string;
  capital! : string;
  laglng! : number[];
  borders! : string[];
  languagesKey! : string[];
  languagesValue! : String[];
  
  
  constructor(private aRoute: ActivatedRoute,
              private _countryService: CountriesService) {
    this.name = this.aRoute.snapshot.paramMap.get('name')!;
  }

  ngOnInit(): void {
    this.getCountry(this.name);
  }

  getCountry(name: string): void {
    this.loading = true
    this._countryService.getCountry(name).subscribe(([res]) => {
      
      const {name, flags, timezones, altSpellings, translations, tld, capital, latlng, borders, languages } = res
      
      this.nativeNameKey = Object.keys(name.nativeName);
      this.nativeNameValue = Object.values(name.nativeName);
      this.flag = flags.svg;
      this.timezones = timezones;
      this.country = res;
      this.altSpellings = altSpellings.join(', ');
      this.title = translations['spa'].common;
      this.tld = tld.join(', ');
      this.capital = capital.join(', ');
      this.laglng = latlng;
      this.borders = borders;
      this.languagesKey = Object.keys(languages)
      this.languagesValue = Object.values(languages)
    })
    setTimeout(() => {
      this.loading = false;
    }, 1500)

  }

  







}
