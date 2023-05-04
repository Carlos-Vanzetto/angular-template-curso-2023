// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponentComponent } from './components/basic-form-component/basic-form-component.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: 'login', component: BasicFormComponentComponent },
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
