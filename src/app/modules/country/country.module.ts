import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';



import { CountryComponent } from './pages/country/country.component';
import { DateComponent } from './components/date/date.component';
import { NewsComponent } from './components/news/news.component';
import { EarthMapComponent } from './pages/earth-map/earth-map.component';
import { CardComponent } from './components/card/card.component';
import { NotNewsComponent } from './components/not-news/not-news.component';
import { CountryRoutingModule } from './country-routing.module';
import { CodesComponent } from './components/tables/codes/codes.component';
import { NamesComponent } from './components/tables/names/names.component';
import { GrographyComponent } from './components/tables/grography/grography.component';
import { LanguagesComponent } from './components/tables/languages/languages.component';




@NgModule({
  declarations: [
    CountryComponent,
    DateComponent,
    NewsComponent,
    EarthMapComponent,
    CardComponent,
    NotNewsComponent,
    CodesComponent,
    NamesComponent,
    GrographyComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
