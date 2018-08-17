import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CompetitionOverviewComponent} from "./competition/competition-overview/competition-overview.component";
import {CompetitionDetailsComponent} from "./competition/competition-details/competition-details.component";
import {CompetitionParticipantsComponent} from "./competition/competition-participants/competition-participants.component";
import {CompetitionPouleComponent} from "./competition/competition-poule/competition-poule.component";
import {CompetitionTournamentComponent} from "./competition/competition-tournament/competition-tournament.component";
import {CompetitionKnockoutComponent} from "./competition/competition-knockout/competition-knockout.component";
import {CompetitionMatchesComponent} from "./competition/competition-matches/competition-matches.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'competitions', component: CompetitionOverviewComponent },
  { path: 'competition/:id', component: CompetitionDetailsComponent,
    children: [
      { path: 'participants', component: CompetitionParticipantsComponent },
      { path: 'pouleoverview', component: CompetitionPouleComponent },
      { path: 'tournamentoverview', component: CompetitionTournamentComponent },
      { path: 'knockoutoverview', component: CompetitionKnockoutComponent },
      { path: 'matches', component: CompetitionMatchesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
