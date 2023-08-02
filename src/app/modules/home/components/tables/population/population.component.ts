import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/modules/country/interfaces/country.interface';

@Component({
  selector: 'home-tables-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  @Input()
  topTenPopulation! : Country[];

  constructor() { }

  ngOnInit(): void {
  }

}
