import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  faCode = faCode;

  constructor() {}

  ngOnInit(): void {}
}
