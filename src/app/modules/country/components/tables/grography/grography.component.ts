import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-tables-grography',
  templateUrl: './grography.component.html',
  styleUrls: ['../../../pages/country/country.component.scss']
})
export class GrographyComponent implements OnInit {

  @Input()
   country! : Country;

  constructor() { }

  ngOnInit(): void {
  }

}
