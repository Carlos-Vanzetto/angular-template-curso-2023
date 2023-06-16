import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() countries: any;
  @Input() modalTitle!: string;
  @Input() loading!: boolean;

  constructor(private _countriesServices: CountriesService) {}

  ngOnInit(): void {}
}
