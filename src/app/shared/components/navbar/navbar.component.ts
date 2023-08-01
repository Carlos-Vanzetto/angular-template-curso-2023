import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faEarthAmerica = faEarthAmerica;

  
  


  constructor(
              private _loginService : LoginService,
              private router: Router           
              ) {}

  ngOnInit(): void {
    console.log(this.isLogged)
    console.log(this.emailLogged)
  }

  onLogout(): void{
    localStorage.clear();
    this._loginService.isLoggedIn = false;
    this.router.navigate(['/'])
  }

  get isLogged() : boolean{
    return this._loginService.isLoggedIn
  }

  get emailLogged() : string | null{
    return localStorage.getItem('email')
  }
}
