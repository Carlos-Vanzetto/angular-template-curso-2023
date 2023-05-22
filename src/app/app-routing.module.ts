// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
