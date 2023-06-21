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

  country : string;
  flag! : string;
  name : string;
  s = document.getElementsByClassName("ORF-1");

  constructor(private aRoute : ActivatedRoute,
              private _countryService : CountriesService) { 
    this.name = '';
    this.country = this.aRoute.snapshot.paramMap.get('name')!;
    
  }

  ngOnInit(): void {
    console.log(this.country)
    this.getCountry(this.country)
    for (let i = 0; i < this.s.length; i++) {
      const slide = this.s[i] as HTMLElement;
      slide.style.display = "none";
  }
    console.log(this.s[0])
  }

  getCountry(name : string): void{
     this._countryService.getCountry(name).subscribe((country : Country)=>{
      console.log(country)
      this.flag = country.flag;
      this.name = country.name.common;
    })
  }
  

}

