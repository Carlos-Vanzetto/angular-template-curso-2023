import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NotFoundRoutingModule,
    RouterModule
  ]
})
export class NotFundModule { }