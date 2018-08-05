import { Component, OnInit } from '@angular/core';
import {LoginService} from "../providers/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

}
