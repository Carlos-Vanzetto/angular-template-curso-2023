import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Continent } from 'src/app/models/continents';
import { RegionParams } from 'src/app/models/region-params';
import { CountriesService } from 'src/app/services/countries/countries.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string;
  continents: Continent[];
  countries: string[];
  modalTitle: string;
  loading: boolean;

  constructor(private _countriesServices: CountriesService) {
    this.title = 'Descubre los datos de los países mas significativos de cada región';
    this.continents = [
      {
        name: 'America',
        value: 'Americas',
        countries: 56,
        area: '42.55 millones km²',
        img: '../../../assets/images/america.jpg',
      },
      {
        name: 'Africa',
        value: 'Africa',
        countries: 59,
        area: '30.37 millones km²',
        img: '../../../assets/images/africa.jpg',
      },
      {
        name: 'Europa',
        value: 'Europe',
        countries: 53,
        area: '10.53 millones km²',
        img: '../../../assets/images/europa.jpg',
      },
      {
        name: 'Oceania',
        value: 'Oceania',
        countries: 27,
        area: '8.526 millones km²',
        img: '../../../assets/images/oceania.jpg',
      },
      {
        name: 'Asia',
        value: 'Asia',
        countries: 50,
        area: '44.58 millones km²',
        img: '../../../assets/images/asia.jpg',
      },
    ];
    this.countries = [];
    this.modalTitle = '';
    this.loading = false;
  }

  ngOnInit(): void {}

  getCountries(regionParams: RegionParams): void {
    this.loading = true;

    setTimeout(() => {
      this.modalTitle = regionParams.regionName;
      this._countriesServices.getCountriesRegion(regionParams.regionValue).subscribe((res) => {
        this.loading = false;
        this.countries = res.sort();
      });
    }, 1500);
  }
}
