import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CompetitionParticipantsComponent } from './competition-participants.component';
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
import {of} from "rxjs/internal/observable/of";

describe('CompetitionParticipantsComponent', () => {
  let component: CompetitionParticipantsComponent;
  let fixture: ComponentFixture<CompetitionParticipantsComponent>;
  let serviceStub: any;

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
        {provide: CompetitionService, useValue: serviceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    serviceStub = {
      getContent: () => of('Testdeelnemer'),
    };
    fixture = TestBed.createComponent(CompetitionParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a participant', inject([CompetitionService], (competitionService: CompetitionService) => {
    component.participantName = 'Testdeelnemer';

    component.addParticipant();
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      expect(competition).toBeDefined();
      expect(competition).toBe('Testdeelnemer');
    });

  }));
});
