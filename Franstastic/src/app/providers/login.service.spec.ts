import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AppRoutingModule } from "../app-routing.module";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginComponent} from "../login/login.component";
import {CompetitionModule} from "../competition/competition.module";
import {APP_BASE_HREF} from "@angular/common";

describe('LoginService', () => {
  let service = LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AppRoutingModule,
        CompetitionModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        LoginService,
        AngularFireAuth
      ],
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    this.service = service;
    expect(service).toBeTruthy();
  }));

  it('should be logged in', (done: DoneFn) => {
    let router = {
      navigate: jasmine.createSpy('navigate')
    }

    this.service.checkAuthState();
    expect(router.navigate).toHaveBeenCalledWith(['competitions']);
    done();
  });

  it('should be logged out', (done: DoneFn) => {
    let router = {
      navigate: jasmine.createSpy('navigate')
    }

    this.service.logout();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
    done();
  });
});
