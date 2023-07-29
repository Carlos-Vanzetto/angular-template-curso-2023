import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { AuthModule } from '../modules/auth/auth.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SpinnerComponent,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    LazyImageComponent
  ],
  exports:[
    SpinnerComponent,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class SharedModule { }
