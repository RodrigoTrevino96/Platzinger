import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getUsers() {
    return this.angularFireDatabase.list('/users');
  }

  getUserByID(id) {
    return this.angularFireDatabase.object(`/users/${id}`);
  }

  createUser(user) {
    return this.angularFireDatabase.object(`/users/${user.id}`).set(user);
  }

  editUser(user) {
    return this.angularFireDatabase.object(`/users/${user.id}`).set(user);
  }

}
