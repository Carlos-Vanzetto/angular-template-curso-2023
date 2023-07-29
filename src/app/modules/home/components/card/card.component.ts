import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { Continent } from 'src/app/modules/home/interfaces/continents.interface';
import { RegionParams } from 'src/app/modules/home/interfaces/region-params.interface';


@Component({
  selector: 'home-card',
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
      value: value,
      name: name,
    };
    this.selectedParams.emit(PARAMETROS);
    
  }
}
