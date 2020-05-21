import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'))
  constructor(private router: Router) { }
  
  get isLoggedIn():boolean {
    return  JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus)

  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }
  logout() {
    this.loggedInStatus = false;
    localStorage.removeItem('loggedIn');
  }
  getUserDetails(username, password) {
    if (username == 'admin' && password == 'segnibest') {
      this.router.navigate(['/admino']);
      return this.loggedInStatus = true;
    }
    else {
      return false;
    }
  }
}
