import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { LogInComponent } from './pages/log-in/log-in.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';


@NgModule({
  declarations: [
    LogInComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthModule { }
