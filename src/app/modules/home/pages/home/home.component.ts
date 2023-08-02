import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Continent } from 'src/app/modules/home/interfaces/continents.interface';
import { CountriesFlag } from 'src/app/modules/home/interfaces/countriesFlag.interface';
import { RegionParams } from 'src/app/modules/home/interfaces/region-params.interface';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { Country } from 'src/app/modules/country/interfaces/country.interface';

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
  topTenArea! : Country[];
  topTenPopulation! : Country[];

  constructor(private _countriesServices: CountriesService) {
    
    this.title = 'Discover the data of any country in the world';
    this.continents = [
      {
        name: 'Americas',
        value: 'Americas',
        countries: 35,
        area: '42.55 millones km²',
        img: '../../../assets/images/america.jpg',
        description:
          'America is a vast continent that extends in the direction of the meridians, and also has a long latitudinal development.',
      },
      {
        name: 'Africa',
        value: 'Africa',
        countries: 54,
        area: '30.37 millones km²',
        img: '../../../assets/images/africa.jpg',
        description:
          'Africa is the third largest continent on the planet and its name corresponds to the word used by the ancient Romans to refer to all the countries south of the Mediterranean (Afri).',
      },
      {
        name: 'Europe',
        value: 'Europe',
        countries: 45,
        area: '10.53 millones km²',
        img: '../../../assets/images/europa.jpg',
        description:
          'Europe is one of the six continents in the world and the fifth largest. It is bordered to the north by the Arctic Ocean, to the south by the Mediterranean Sea, the Black Sea and the Caspian Sea, to the east by the Ural Mountains and to the west by the Atlantic Ocean.',
      },
      {
        name: 'Oceania',
        value: 'Oceania',
        countries: 14,
        area: '8.526 millones km²',
        img: '../../../assets/images/oceania.jpg',
        description:
          'Oceania is a fascinating continent, with Australia, New Zealand and French Polynesia being the best known countries.',
      },
      {
        name: 'Asia',
        value: 'Asia',
        countries: 46,
        area: '44.58 millones km²',
        img: '../../../assets/images/asia.jpg',
        description:
          'Asia is the largest continent and the one with the greatest diversity of races, cultures and languages ​​in the world.',
      },
    ];
    this.countries = [];
    this.modalTitle = '';
    this.loading = false;
  }
  
  ngOnInit(): void {
    this.getCountries()
   
  }

  getCountries(){
    this._countriesServices.getCountries().subscribe( (res)=>{
      let area = res.sort((
        (a, b) => b.area - a.area)
      )
      this.topTenArea = area.slice(0,10)

      let population = res.sort((
        (a, b) => b.population - a.population)
      )
      this.topTenPopulation = population.slice(0,10)
    })} 
  

  getCountriesRegion(regionParams: RegionParams): void {
    this.loading = true;

    setTimeout(() => {
      this.modalTitle = regionParams.name;
      this._countriesServices.getCountriesRegion(regionParams.value).subscribe((res) => {
        
        res.forEach(({name})=>{
          this.countries.push(name.common)
        })
        this.countries.sort();
        this.loading = false
    })
  }, 1500);
  }

}
