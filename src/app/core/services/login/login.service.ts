import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() {}

  login(email: string, password: string) {
    if (email === 'admin@vanzeron.com' && password === 'Admin1234$') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
