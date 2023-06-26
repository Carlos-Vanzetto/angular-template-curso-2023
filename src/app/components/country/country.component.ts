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
  country: string;
  flag!: string;
  name!: string;
  timezones! : string[];
  
  constructor(private aRoute: ActivatedRoute,
    private _countryService: CountriesService) {
    this.country = this.aRoute.snapshot.paramMap.get('name')!;

  }

  ngOnInit(): void {
    this.getCountry(this.country);
  }

  getCountry(name: string): void {
    this.loading = true
    this._countryService.getCountry(name).subscribe(({flag,name,timezones}: Country) => {
      this.flag = flag;
      this.name = name.common;
      this.timezones = timezones;
    })
    setTimeout(() => {
      this.loading = false;
    }, 1500)
    
  }




}

