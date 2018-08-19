import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
    this.checkAuthState();
  }

  checkAuthState() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.router.navigate(['competitions']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
