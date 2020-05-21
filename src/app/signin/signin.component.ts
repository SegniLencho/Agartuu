import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authservice/auth.service';
import { Router } from '@angular/router';
import { AlertServicesService } from '../services/alert-services.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router, private alertMessage: AlertServicesService) { }

  ngOnInit(): void {
  }
  login(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    if (this.authService.getUserDetails(email, password)) {
      this.authService.setLoggedIn(true);
      this.route.navigate(['/admino'])

    }
    else {
      this.alertMessage.showCatchedError("User name and password is not correct", "Please try again")
    }
  }
}
