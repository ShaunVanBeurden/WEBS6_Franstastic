import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompetitionOverviewComponent } from './competition/competition-overview/competition-overview.component';
import { LoginService } from "./providers/login.service";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
import { CompetitionService } from "./providers/competition.service";
import { CompetitionDetailsComponent } from './competition/competition-details/competition-details.component';
import { CompetitionParticipantsComponent } from './competition/competition-participants/competition-participants.component';
import { DragulaModule } from 'ng2-dragula';
import { CompetitionPouleComponent } from './competition/competition-poule/competition-poule.component';
import { CompetitionTournamentComponent } from './competition/competition-tournament/competition-tournament.component';
import { CompetitionKnockoutComponent } from './competition/competition-knockout/competition-knockout.component';
import { CompetitionMatchesComponent } from './competition/competition-matches/competition-matches.component';
import {CompetitionModule} from "./competition/competition.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompetitionOverviewComponent,
    CompetitionDetailsComponent,
    CompetitionParticipantsComponent,
    CompetitionPouleComponent,
    CompetitionTournamentComponent,
    CompetitionKnockoutComponent,
    CompetitionMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CompetitionModule,
    DragulaModule.forRoot(),
    //Initialize Firebase module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    LoginService,
    CompetitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
