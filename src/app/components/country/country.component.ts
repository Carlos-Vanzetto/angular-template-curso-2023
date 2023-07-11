import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries/countries.service';

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
      this.nativeNameKey =Object.keys(res.name.nativeName)
      this.nativeNameValue = Object.values(res.name.nativeName)



      this.flag = res.flags.svg;
      this.timezones = res.timezones;
      this.country = res;
      this.altSpellings = res.altSpellings.join(', ');
      console.log(this.altSpellings)
      this.title = res.translations['spa'].common;

    })
    setTimeout(() => {
      this.loading = false;
    }, 1500)
    
  }
}
