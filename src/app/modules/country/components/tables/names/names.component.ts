import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-tables-names',
  templateUrl: './names.component.html',
  styleUrls: ['../../../pages/country/country.component.scss']
})
export class NamesComponent implements OnInit {

  @Input()
    country! : Country;

  @Input()
    nativeNameKey!: string[];

  @Input()
    nativeNameValue!: any[];




  constructor() { }

  ngOnInit(): void {
  }

}
