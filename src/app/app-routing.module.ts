// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
  { path: '', component: HomeComponent /* , canActivate: [LoginGuard] */ },
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
