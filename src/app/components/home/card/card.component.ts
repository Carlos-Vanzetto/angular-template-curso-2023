import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { Continent } from 'src/app/models/continents';
import { RegionParams } from 'src/app/models/region-params';


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

  constructor() {
    this.region = '';
    this.modalTitle = '';
  }

  ngOnInit(): void {}
 
  getContinent(value: string, name: string) : void {
    const PARAMETROS: RegionParams = {
      regionValue: value,
      regionName: name,
    };
    this.selectedParams.emit(PARAMETROS);
    
  }
}
