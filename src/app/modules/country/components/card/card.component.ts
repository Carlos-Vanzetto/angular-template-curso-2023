import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/news.interface';

@Component({
  selector: 'country-news-card',
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
