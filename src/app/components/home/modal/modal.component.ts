import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { LoginService } from 'src/app/services/login/login.service';
import { CountriesFlag } from 'src/app/models/countriesFlag';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() countries!: CountriesFlag[];
  @Input() modalTitle!: string;
  @Input() loading!: boolean;

  allCountries: CountriesFlag[] = [];
  filteredSize!: number;

  filter = new FormControl('');
  selectCountry = new FormControl('', Validators.required);
  selectedCountry!: string | null | undefined;
  selectedCountry!: string | null;

  onKeyUp(filterText: string | null): void {
    if (filterText === '' || filterText === undefined) {
      this.resize();
      this.countries = this.allCountries;

      return;
    }

    if (this.allCountries.length === 0) {
      this.allCountries = [...this.countries]; // store all countries before filtering
    }

    if (filterText != null) {
      this.countries = this.allCountries.filter((a) => a.country.toLowerCase().includes(filterText));
      this.filteredSize = this.countries.length;
    }

    this.selectCountry.setValue(null);
  }
  onSelected() {
    console.log(this.selectCountry.value);
    this.selectedCountry = this.selectCountry.value?.slice(5);
    console.log(this.selectedCountry);
  }
  onChange() {
    console.log('change', this.selectCountry.value);
    this.selectedCountry = this.selectCountry.value;
  }
  resize() {
    this.filteredSize = 1;
  }
  cleanSelect() {
    this.allCountries = [];
    this.filteredSize = 1;
    this.selectCountry.setValue(null);
    this.filter.setValue('');
  }

  onFocus() {
    if (this.countries.length === 1) {
      this.selectCountry.setValue(this.countries[0].country);
      console.log(this.selectCountry.value);
    }
  }
  constructor(private _loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.selectCountry.valueChanges.subscribe(() => console.log(this.selectedCountry));
  }

  getPais() {
    // if(!this._loginService.isLoggedIn){
    //   this.router.navigate(['/login']);
    //   return
    //  } else {
    this.router.navigate([`/country/${this.selectedCountry}`]);
    this.cleanSelect();
    //  }
  }
}
