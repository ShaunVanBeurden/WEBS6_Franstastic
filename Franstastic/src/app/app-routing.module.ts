import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CompetitionOverviewComponent} from "./competition/competition-overview/competition-overview.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'competitions', component: CompetitionOverviewComponent },
  /*{ path: 'competition/:id', component: CompetitionDetailComponent,
    children: [
      { path: 'participants', component: ParticipantsComponent },
      { path: 'pouleoverview', component: CompetitionPouleComponent },
      { path: 'tournamentoverview', component: CompetitionTournamentComponent },
      { path: 'knockoutoverview', component: CompetitionKnockoutComponent },
      { path: 'matches', component: MatchDetailsComponent }
    ]
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
