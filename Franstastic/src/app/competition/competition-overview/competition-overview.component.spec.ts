import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CompetitionOverviewComponent } from './competition-overview.component';
import {CompetitionService} from "../../providers/competition.service";
import {RouterModule} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginService} from "../../providers/login.service";
import {APP_BASE_HREF} from "@angular/common";
import {LoginComponent} from "../../login/login.component";
import {environment} from "../../../environments/environment";
import {CompetitionModule} from "../competition.module";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {map} from "rxjs/operators";

describe('CompetitionOverviewComponent', () => {
  let component: CompetitionOverviewComponent;
  let fixture: ComponentFixture<CompetitionOverviewComponent>;

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
    fixture = TestBed.createComponent(CompetitionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change competitiontype', () => {
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = select.options[0].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectedCompetitionType).toEqual('Toernooi');
  });
});
