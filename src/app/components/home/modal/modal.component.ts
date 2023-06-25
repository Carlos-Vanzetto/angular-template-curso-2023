import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() countries!: string[];
  @Input() modalTitle!: string;
  @Input() loading!: boolean;

  allCountries: string[] = [];
  filteredSize!: number;
  filter = new FormControl('');
  selectCountry = new FormControl('');
  @ViewChild('selectOptions') selectOptions!: any;

  onKeyUp(filterText: string | null): void {
    if (filterText === '' || filterText === undefined) {
      this.filteredSize = 1;
      this.countries = this.allCountries;
      return;
    }

    if (this.allCountries.length === 0) {
      this.allCountries = [...this.countries]; // store all countries before filtering
    }
    if (filterText != null) {
      this.countries = this.allCountries.filter((a) => a.toLowerCase().includes(filterText));
      this.filteredSize = this.countries.length;
    }
  }

  resize() {
    this.filteredSize = 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
