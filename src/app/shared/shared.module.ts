import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { SpinnerComponent } from './components/spinner/spinner.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { RouterModule } from '@angular/router';
import { ButtonAuthComponent } from './components/button-auth/button-auth.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    LazyImageComponent,
    ButtonAuthComponent
    
  ],
  exports:[
    SpinnerComponent,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    LazyImageComponent,
    ButtonAuthComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    
  ]
})
export class SharedModule { }
