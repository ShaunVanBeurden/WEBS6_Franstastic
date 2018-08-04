import { Component, OnInit } from '@angular/core';
import { LoginService } from "../providers/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    //this.loginService.loginWithGoogle();
  }
}
