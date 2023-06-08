import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries/countries.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allCountries: Country[] = [];
  allCountryNames: string[] = [];
  isFetching: boolean = false;
  constructor(private countryService: CountriesService) {}

  getCountries() {
    this.isFetching = true;
    this.countryService.getCountries().subscribe((res) => {
      const countries = res.countries;
      const countriesNames = res.countryNames;
      this.allCountries = countries;
      this.allCountryNames = countriesNames;
      this.isFetching = false;
    });
  }
  getCountryList(region: string) {
    this.isFetching = true;
    this.countryService.getCountryList(region).subscribe((res) => {
      console.log(res);
      this.isFetching = false;
    });
  }
  getCountriesProxy() {
    this.isFetching = true;
    this.countryService.getCountriesProxy().subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit(): void {}
}
