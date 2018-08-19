import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionSpectateComponent } from './competition-spectate.component';
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

describe('CompetitionSpectateComponent', () => {
  let component: CompetitionSpectateComponent;
  let fixture: ComponentFixture<CompetitionSpectateComponent>;

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
        AngularFireAuth
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionSpectateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check competitiontype', () => {
    component.competitionService.getCompetition('-LKCDT-9WA75bSaciEqz').valueChanges().subscribe(competition => {
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({poule: true});
      competition.poules = null;
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({poule: false});
    });

    component.competitionService.getCompetition('-LKC9MM-wc2xAY71hDk7').valueChanges().subscribe(competition => {
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({toernooi: true});
      competition.rounds = null;
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({toernooi: false});
    });

    component.competitionService.getCompetition('-LKIEoWYDF60svVX2eVY').valueChanges().subscribe(competition => {
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({ko: true});
      competition.rounds = null;
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({ko: false});
      competition.type = null;
      component.checkCompetitionType(competition);
      expect(competition.competitionTypes).toContain({toernooi: false, ko: false, poule: false});
    });
  });
});
