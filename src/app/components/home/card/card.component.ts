import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() continent : any;
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  region: string;
  modalTitle : string;

  constructor(private _countriesServices : CountriesService) { 
    
    this.region = '';
    this.modalTitle = '';
  }

  ngOnInit(): void {
    
  }

  getContinent(value : string, nombre: string){
    const PARAMETROS = {
      regionValue : value,
      regionNombre : nombre
    };
    this.parametrosSeleccionados.emit(PARAMETROS)
  }
}
