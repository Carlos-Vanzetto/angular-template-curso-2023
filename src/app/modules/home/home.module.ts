import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { PopulationComponent } from './components/tables/population/population.component';
import { AreaComponent } from './components/tables/area/area.component';



@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
    ModalComponent,
    PopulationComponent,
    AreaComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ]
})
export class HomeModule { }
