import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/new.interface';

@Component({
  selector: 'country-new-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
    article! : Article;


  constructor() { }

  ngOnInit(): void {
  }

}
