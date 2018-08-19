import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {LoginService} from "../providers/login.service";
import {AngularFireAuth} from "angularfire2/auth";
import {environment} from "../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {AppRoutingModule} from "../app-routing.module";
import {LoginComponent} from "../login/login.component";
import {CompetitionModule} from "../competition/competition.module";
import {APP_BASE_HREF} from "@angular/common";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AppRoutingModule,
        CompetitionModule
      ],
      declarations: [
        LoginComponent,
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        LoginService,
        AngularFireAuth
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
