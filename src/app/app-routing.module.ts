// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
