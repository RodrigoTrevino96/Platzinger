import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "../../../node_modules/firebase";
// import { firebase } from "firebase/app";


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth) { }
  fbProvider = new firebase.auth.FacebookAuthProvider();

  loginWithEmail(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  loginWithFacebook() {
    return this.angularFireAuth.signInWithPopup(this.fbProvider)
      .then((data) => {
        alert("Inicio Sesión Facebook");
        console.log(data);
      })
      .then((error) => {
        alert("Error Inicio Sesión Facebook");
        console.log(error);
      })
  }

  registerWithEmail(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Regresa información cada vez que haya un cambio en la sesión del usuario
  getStatus() {
    return this.angularFireAuth.authState;
  }

  logOut() {
    return this.angularFireAuth.signOut();
  }
}
