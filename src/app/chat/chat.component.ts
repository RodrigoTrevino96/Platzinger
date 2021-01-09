import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../interfaces/user";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  friendId: any;
  friend!: User;
  price: number = 12.348290348203;
  today: any = Date.now();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    console.clear();
    this.friendId = this.activatedRoute.snapshot.params['id'];
    console.log('friend id:', this.friendId);

    this.userService
      .getUserByID(this.friendId)
      .valueChanges()
      .subscribe(
        (data: any) => {
          this.friend = data;
        },
        (error) => {
          console.log(error);
        }
      )

    // console.log('Chatting with', this.friend.nick);
    console.log('Usuario', this.friend);
  }


  ngOnInit(): void {
  }

}
