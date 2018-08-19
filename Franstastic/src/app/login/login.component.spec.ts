import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {LoginService} from "../providers/login.service";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AppRoutingModule} from "../app-routing.module";
import {CompetitionModule} from "../competition/competition.module";
import {APP_BASE_HREF} from "@angular/common";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
