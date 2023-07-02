import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Continent } from 'src/app/models/continents';
import { RegionParams } from 'src/app/models/region-params';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { faEarthAmerica, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faEarthAmerica = faEarthAmerica;
  faMagGlass = faMagnifyingGlass;
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

  ngOnInit(): void {}

  getCountries(regionParams: RegionParams): void {
    this.loading = true;

    setTimeout(() => {
      this.modalTitle = regionParams.regionName;
      this._countriesServices.getCountriesRegion(regionParams.regionValue).subscribe((res) => {
        console.log(res);
        let countries: string[] = [];
        res.forEach(({ translations }) => {
          countries.push(translations['spa'].common);
        });
        this.countries = countries.sort();
        this.loading = false;
      });
    }, 1500);
  }
}
