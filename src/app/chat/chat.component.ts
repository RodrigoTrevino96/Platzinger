import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../interfaces/user";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  friendId?: number;
  friends: User[];
  friend: User;

  constructor(private activatedRoute: ActivatedRoute) {
    console.clear();
    this.friendId = this.activatedRoute.snapshot.params['id'];
    console.log('friend id:', this.friendId);

    let myUser: User = {
      nick: 'Rodrigo',
      subNick: 'el yoyos',
      age: 24,
      email: 'email0@email.com',
      isFriend: true,
      id: 0
    };

    let user1: User = {
      nick: 'calvin',
      subNick: 'el calvin',
      age: 24,
      email: 'email1@email.com',
      isFriend: false,
      id: 1
    };

    let user2: User = {
      nick: 'manguito',
      subNick: 'el manguito',
      age: 25,
      email: 'email2@email.com',
      isFriend: true,
      id: 2
    };

    let user3: User = {
      nick: 'panchito',
      subNick: 'el panchito',
      age: 26,
      email: 'email3@email.com',
      isFriend: false,
      id: 3
    };
    this.friends = [myUser, user1, user2, user3]

    console.log("Usuarios", this.friends);

    this.friend = this.friends.find(record => {
      return record.id == this.friendId
    })!;

    console.log('Usuario', this.friend);
  }


  ngOnInit(): void {
  }

}
