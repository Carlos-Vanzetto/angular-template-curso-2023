import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-tables-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['../../../pages/country/country.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input()
    country! :        Country;

  @Input()
    languagesKey! :   string[];

  @Input()
    languagesValue! : string[];

  constructor() { }

  ngOnInit(): void {
  }

}
