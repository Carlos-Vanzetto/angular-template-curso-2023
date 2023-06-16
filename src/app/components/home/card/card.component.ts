import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Continent } from 'src/app/models/continents';
import { RegionParams } from 'src/app/models/region-params';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() continent!: Continent;
  @Output() selectedParams = new EventEmitter<RegionParams>();

  region: string;
  modalTitle: string;

  constructor(private _countriesServices: CountriesService) {
    this.region = '';
    this.modalTitle = '';
  }

  ngOnInit(): void {}

  getContinent(value: string, name: string) {
    const PARAMETROS: RegionParams = {
      regionValue: value,
      regionName: name,
    };
    this.selectedParams.emit(PARAMETROS);
  }
}
