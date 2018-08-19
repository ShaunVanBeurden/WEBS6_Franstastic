import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionMatchesComponent } from './competition-matches.component';
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

describe('CompetitionMatchesComponent', () => {
  let component: CompetitionMatchesComponent;
  let fixture: ComponentFixture<CompetitionMatchesComponent>;

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
    fixture = TestBed.createComponent(CompetitionMatchesComponent);
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

  it('should save the matchdate for poules', () => {
    let poules = [];
    let matches = [];

    matches.push({dateTime: '2018-12-09T15:30', player1: {name: 'Vis'}, player2: {name: 'Beer'}});
    poules.push({matches: matches, name: 'poule 1'});

    component.poules = poules;
    component.saveMatchDatePoule(poules[0], matches[0]);

    component.competitionService.getCompetition('-LKCDT-9WA75bSaciEqz').valueChanges().subscribe(competition => {
      expect(poules).toEqual(competition.poules);
    });
  });

  it('should save the matchdate for rounds', () => {
    let rounds = [];
    let matches = [];

    matches.push({dateTime: '2018-12-09T15:30', player1: {name: 'Piet'}, player2: {name: 'Jan'}});
    rounds.push({matches: matches, name: 'round 1'});

    component.rounds = rounds;
    component.saveMatchDateRound(rounds[0], matches[0]);

    component.competitionService.getCompetition('-LKC9MM-wc2xAY71hDk7').valueChanges().subscribe(competition => {
      expect(rounds).toEqual(competition.rounds);
    });
  });
});
