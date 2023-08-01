import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/modules/country/interfaces/country.interface';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { switchMap } from 'rxjs'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  loading = true;
 
  timezones!: string[];
  country?: Country;
  title!: string;
  nativeNameKey!: string[];
  nativeNameValue!: string[];
  languagesKey!: string[];
  languagesValue!: string[];


  constructor(
              private aRoute: ActivatedRoute,
              private _countryService: CountriesService,
              private router: Router) {
   
  }
 

  ngOnInit(): void {
    
    this.aRoute.params
      .pipe(
        switchMap(({ name }) => this._countryService.getCountry(name))
      )
      .subscribe( country => {
          if(!country) { 
            return this.router.navigate(['/**']);
          }
          
          const { name, timezones, languages } = country
          
          this.country = country;
          this.title = name.common;
          this.nativeNameKey = Object.keys(name.nativeName);
          this.nativeNameValue = Object.values(name.nativeName);
          this.timezones = timezones;
          this.languagesKey = Object.keys(languages)
          this.languagesValue = Object.values(languages)
        
          this.loading = false;
   
          return
        })
      }
}

  
      

  

  




