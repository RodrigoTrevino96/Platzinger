import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { User } from "../interfaces/user";
import { AuthenticationService } from '../services/authentication.service';
import { BackendService } from '../services/backend.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  friends: User[];
  query: string = '';
  currentUser: User;
  catBreed: string = "abys";
  cat: Cat;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private gatitos: BackendService) {
    console.clear();
    console.log('Home');
    this.userService
      .getUsers()
      .valueChanges()
      .subscribe(
        (data: User[]) => {
          this.currentUser = data[data.length - 1];
          this.friends = data;
          console.log("List of friends",this.friends)
        }, (error) => {
          console.log("error suscribe", console.log(error))
        }
      );
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authenticationService.logOut();
  }

  getGatito() {
    console.log('Home Component', this.catBreed);
    this.gatitos
      .getImageCatBreed(this.catBreed)
      .subscribe(
        (data: any) => {
          this.cat = data[0];
          console.log('--Subscribe getGatito() HOME', data[0]);
        },
        (error: any) => {
          console.log(error);
        })
  }
}
