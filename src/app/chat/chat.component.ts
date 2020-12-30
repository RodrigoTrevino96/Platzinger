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

  friendId?: number;
  friends: User[];
  friend: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    console.clear();
    this.friendId = this.activatedRoute.snapshot.params['id'];
    console.log('friend id:', this.friendId);
    this.friends = this.userService.getFriends();
    
    
    
    this.friend = this.friends.find(record => {
      return record.id == this.friendId
    })!;
    
    console.log('Chatting with', this.friend.nick);
    console.log('Usuario', this.friend);
  }


  ngOnInit(): void {
  }

}
