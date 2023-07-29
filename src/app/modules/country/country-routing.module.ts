import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './pages/country/country.component';
import { EarthMapComponent } from './pages/earth-map/earth-map.component';


const routes: Routes = [
    {
        path: 'by/:name',
        component: CountryComponent 
    },
    {
        path: 'eart',
        component: EarthMapComponent
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
export class CountryRoutingModule { }
