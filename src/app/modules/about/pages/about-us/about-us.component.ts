import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  mostrar: boolean = false;
  mostrard: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}