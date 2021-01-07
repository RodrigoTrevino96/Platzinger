import { Component, OnInit } from '@angular/core';
import { stat } from 'fs';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private autheticationService: AuthenticationService) {

    this.autheticationService
      .getStatus()
      .subscribe((status) => {
        this.userService
          .getUserByID(status.uid)
          .valueChanges()
          .subscribe(
            (data: User) => {
              this.user = data;
              console.log('Current User', this.user);
            }, (error) => {
              console.log(error);
            });
      }, (error) => {
        console.log(error);
      });

  }

  ngOnInit(): void {
  }

  saveSettings() {
    this.userService.editUser(this.user)
      .then(data => alert('Cambios Guardados'))
      .catch(error => { alert(error); console.log(error) });
  }
}
