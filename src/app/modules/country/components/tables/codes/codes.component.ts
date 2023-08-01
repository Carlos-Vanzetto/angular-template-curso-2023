import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-tables-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['../../../pages/country/country.component.scss']
})
export class CodesComponent implements OnInit {

  @Input()
    country! : Country;


    

  constructor() { }

  ngOnInit(): void {
  }

}
