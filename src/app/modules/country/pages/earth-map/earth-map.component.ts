import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-earth-map',
  templateUrl: './earth-map.component.html',
  styleUrls: ['./earth-map.component.scss'],
})
export class EarthMapComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  constructor(private router: Router) {}
  closeMap() {
    this.router.navigate(['/']);
  }
  selectCountry(event: any) {
    console.log(event['srcElement'].id);
    const cca2 = event['srcElement'].id;
    this.router.navigate([`/countries/by/${cca2}`]);
  }
  ngOnInit(): void {}
}
