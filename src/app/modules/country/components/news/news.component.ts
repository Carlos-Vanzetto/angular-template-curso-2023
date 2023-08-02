import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Article } from 'src/app/modules/country/interfaces/new.interface';
import { NewsService } from 'src/app/core/services/new/news.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit,OnChanges {
  
  @Input() 

  country! :      Country;

  articles! :     Article[];

  totalResults :  number = 0;

  currentPage :   number = 1;

  loading :       boolean = false;

  totalPages! :   number;

  error : boolean = false;


  constructor( private _newsService : NewsService ) { }
  ngOnChanges(changes: SimpleChanges): void {
  
    this.getNews(this.country.cca2.toLocaleUpperCase(), this.currentPage);
  }

  ngOnInit(): void {
    this.loading = true
    this.getNews(this.country.cca2.toLocaleUpperCase(), this.currentPage);

  }
  

  getNews(country : string, page : number) {
    this._newsService.getNews(country, page).subscribe({
      next : ({articles, totalResults})=>{
      this.articles = articles;
      this.totalResults = totalResults;
      this.totalPages = Math.ceil(totalResults / 4)
      this.loading = false 
      
      console.log(this.articles)
    }, error: (error) => {
      this.loading = false;
      this.error = true;
      console.log(error)
    }
  })
  }

  previousPage(){
    this.currentPage--;
    this.loading = true;
    this.getNews(this.country.cca2.toLocaleUpperCase(), this.currentPage);
  }

  nextPage(){
    this.currentPage++;
    this.loading = true;
    this.getNews(this.country.cca2.toLocaleUpperCase(), this.currentPage);
  }

  previousPageClass(){
    if(this.currentPage === 1 ){
      return false;
    } else { 
      return true
    }
  }

  nextPageClass(){
    if(this.currentPage === this.totalPages){
      return false; 
    } else { 
      return true;
    }
}
}
