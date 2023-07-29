import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/modules/country/interfaces/new.interface';
import { NewsService } from 'src/app/core/services/new/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  @Input() 

  cca2! :         string;

  articles! :     Article[];

  totalResults :  number = 0;

  currentPage :   number = 1;

  loading :       boolean = false;

  totalPages! :   number;



  constructor( private _newsService : NewsService ) { }

  ngOnInit(): void {
    this.getNews(this.cca2.toLocaleUpperCase(), this.currentPage);
  }
  

  getNews(country : string, page : number) {
    this._newsService.getNews(country, page).subscribe({
      next : ({articles, totalResults})=>{
      this.articles = articles;
      this.totalResults = totalResults;
      this.totalPages = Math.ceil(totalResults / 4)
      setTimeout(()=>{
       this.loading = false 
      }, 2000)
      
      console.log(this.articles)
    }, error: (error) => {
      console.log(error)
    }
  })
  }

  previousPage(){
    this.currentPage--;
    this.loading = true;
    this.getNews(this.cca2.toLocaleUpperCase(), this.currentPage);
  }

  nextPage(){
    this.currentPage++;
    this.loading = true;
    this.getNews(this.cca2.toLocaleUpperCase(), this.currentPage);
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
