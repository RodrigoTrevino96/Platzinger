import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  operation: string = "login";
  email: string = "";
  password: string = "";
  nick: string = "";

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password)
      .then((data) => {
        alert('login');
        console.log(data);
        this.router.navigate(['home']);
      })
      .catch((error) => {
        alert(error);
        console.error
      });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
      .then((data) => {
        const user = {
          id: data.user?.uid,
          email: this.email,
          nick: this.nick,
        };
        this.userService.createUser(user)
          .then((data2) => {
            alert('register 2');
            console.log(data2);
          })
          .catch((error2) => {
            alert('error 2');
            console.log(error2);
          });
        alert('register');
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
