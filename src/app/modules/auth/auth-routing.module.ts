import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';



const routes: Routes = [
    {
        path: 'login',
        component: LogInComponent 
    },
    {
        path: 'register',
        component: RegistrationFormComponent
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
