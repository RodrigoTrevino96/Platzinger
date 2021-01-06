import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  operation: string = "login";
  email: string = "";
  password: string = "";
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password)
      .then((data) => {
        alert('login');
        console.log(data);
      })
      .catch((error) => {
        alert(error);
        console.error
      });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
      .then((data) => {
        alert('login');
        console.log(data);
      })
      .catch((error) => {
        alert(error);
        console.error
      });
  }

  loginWithFacebook() {
    this.authenticationService.loginWithFacebook();
  }
}
