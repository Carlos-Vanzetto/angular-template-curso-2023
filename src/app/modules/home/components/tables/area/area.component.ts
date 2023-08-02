import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/modules/country/interfaces/country.interface';

@Component({
  selector: 'home-tables-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  @Input()
    topTenArea! : Country[];


  constructor() { }

  ngOnInit(): void {
  }

}
