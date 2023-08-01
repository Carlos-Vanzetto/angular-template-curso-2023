import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean =false ;
  constructor() {
    if(localStorage.getItem('email') === 'admin@vanzeron.com'){
      this.isLoggedIn = true; 
    }
  }

  login(email: string, password: string) : boolean {
    
    if (email === 'admin@vanzeron.com' && password === 'Admin1234$') {
      this.isLoggedIn = true;
      localStorage.setItem('email', email);
    }
    return this.isLoggedIn;
  }
}
