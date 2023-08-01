// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginGuard } from './core/guards/login.guard';



const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'auth', 
    loadChildren: ()=> import('./modules/auth/auth.module').then(m=> m.AuthModule)
  },
  { 
    path: 'countries',
    loadChildren: ()=> import('./modules/country/country.module').then(m => m.CountryModule),
    canActivate: [LoginGuard]
  },
  { 
    path: 'aboutus', 
    loadChildren: ()=> import('./modules/about/about.module').then(m=>m.AboutModule)
  },
  { 
    path: '**',
    loadChildren: ()=>import('./modules/not-found/not-found.module').then(m=>m.NotFundModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
