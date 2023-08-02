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
        name: 'America',
        value: 'Americas',
        countries: 35,
        area: '42.55 millones km²',
        img: '../../../assets/images/america.jpg',
        description:
          'América es un amplio continente que se extiende en el sentido de los meridianos, y además, tiene un largo desarrollo latitudinal. América es la segunda masa de tierra más grande del planeta, luego de Asia.',
      },
      {
        name: 'Africa',
        value: 'Africa',
        countries: 54,
        area: '30.37 millones km²',
        img: '../../../assets/images/africa.jpg',
        description:
          'África es el tercer continente más grande del planeta y su nombre corresponde a la palabra que usaban los antiguos romanos para referirse a todos los países al sur del Mediterráneo (Afri). Mucho antes, hace 300 000 años, de África surgió el Homo sapiens desde donde se expandió por todo el mundo.',
      },
      {
        name: 'Europa',
        value: 'Europe',
        countries: 45,
        area: '10.53 millones km²',
        img: '../../../assets/images/europa.jpg',
        description:
          'Europa es uno de los seis continentes del mundo y el quinto más extenso. Limita al norte con el océano Ártico, al sur con el mar Mediterráneo, el mar Negro y el mar Caspio, al este con los montes Urales y al oeste con el océano Atlántico.',
      },
      {
        name: 'Oceania',
        value: 'Oceania',
        countries: 14,
        area: '8.526 millones km²',
        img: '../../../assets/images/oceania.jpg',
        description:
          'Oceanía es un continente fascinante, siendo Australia, Nueva Zelanda y la Polinesia Francesa los países más conocidos. Cada año, los surfistas de todos los rincones del mundo se reúnen en toda Oceanía por sus condiciones impecables, sus impresionantes islas y su extraordinaria vida marina',
      },
      {
        name: 'Asia',
        value: 'Asia',
        countries: 46,
        area: '44.58 millones km²',
        img: '../../../assets/images/asia.jpg',
        description:
          'Asia es el continente más grande y el que presenta la mayor diversidad de razas, culturas y lenguas del mundo.',
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
