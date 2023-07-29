import { Component, OnInit } from '@angular/core';
import { faBars, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faEarthAmerica = faEarthAmerica;
  constructor() {}

  ngOnInit(): void {}
}
