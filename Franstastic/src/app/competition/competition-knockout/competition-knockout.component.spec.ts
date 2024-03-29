import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionKnockoutComponent } from './competition-knockout.component';
import {CompetitionModule} from "../competition.module";
import {RouterModule} from "@angular/router";
import {CompetitionService} from "../../providers/competition.service";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginService} from "../../providers/login.service";
import {APP_BASE_HREF} from "@angular/common";
import {LoginComponent} from "../../login/login.component";
import {environment} from "../../../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {noComponentFactoryError} from "@angular/core/src/linker/component_factory_resolver";

describe('CompetitionKnockoutComponent', () => {
  let component: CompetitionKnockoutComponent;
  let fixture: ComponentFixture<CompetitionKnockoutComponent>;
  let element: HTMLElement;

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
    fixture = TestBed.createComponent(CompetitionKnockoutComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate knockout competition', () => {
    component.competitionService.key = '-LKCDT-9WA75bSaciEqz';
    component.generateKnockout();
  });

});
