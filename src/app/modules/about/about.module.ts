import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AuthRoutingModule
  ]
})
export class AboutModule { }