// Angular Imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from '@environment';
import { ReactiveFormsModule } from '@angular/forms';
// This Module Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './appConfig/appconfig.service';
import { CardComponent } from './components/home/card/card.component';
import { ModalComponent } from './components/home/modal/modal.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegistrationFormComponent,
    NotFoundComponent,
    AboutUsComponent,
    CardComponent,
    ModalComponent,
    SpinnerComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
