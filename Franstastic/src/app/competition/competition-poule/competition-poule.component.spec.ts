import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPouleComponent } from './competition-poule.component';
import {RouterModule} from "@angular/router";
import {CompetitionService} from "../../providers/competition.service";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginService} from "../../providers/login.service";
import {APP_BASE_HREF} from "@angular/common";
import {LoginComponent} from "../../login/login.component";
import {environment} from "../../../environments/environment";
import {CompetitionModule} from "../competition.module";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {DragulaService} from "ng2-dragula";

describe('CompetitionPouleComponent', () => {
  let component: CompetitionPouleComponent;
  let fixture: ComponentFixture<CompetitionPouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterModule,
        RouterModule.forRoot([]),
        CompetitionModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        CompetitionService,
        LoginService,
        AngularFireAuth,
        DragulaService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionPouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
