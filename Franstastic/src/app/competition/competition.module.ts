import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import { FormsModule } from '@angular/forms';
import { CompetitionSpectateComponent } from './competition-spectate/competition-spectate.component';
import {CompetitionTournamentComponent} from "./competition-tournament/competition-tournament.component";
import {CompetitionDetailsComponent} from "./competition-details/competition-details.component";
import {CompetitionKnockoutComponent} from "./competition-knockout/competition-knockout.component";
import {CompetitionMatchesComponent} from "./competition-matches/competition-matches.component";
import {CompetitionParticipantsComponent} from "./competition-participants/competition-participants.component";
import {CompetitionOverviewComponent} from "./competition-overview/competition-overview.component";
import {CompetitionPouleComponent} from "./competition-poule/competition-poule.component";
import {DragulaModule} from "ng2-dragula";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DragulaModule.forRoot(),
  ],
  declarations: [
    MenuComponent,
    CompetitionSpectateComponent,
    CompetitionOverviewComponent,
    CompetitionDetailsComponent,
    CompetitionParticipantsComponent,
    CompetitionPouleComponent,
    CompetitionTournamentComponent,
    CompetitionKnockoutComponent,
    CompetitionMatchesComponent
  ],
  exports: [
    MenuComponent
  ],
  entryComponents: [LoginComponent],
  providers: [],
})
export class CompetitionModule { }
