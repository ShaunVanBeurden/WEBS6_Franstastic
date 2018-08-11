import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-tournament',
  templateUrl: './competition-tournament.component.html',
  styleUrls: ['./competition-tournament.component.scss']
})
export class CompetitionTournamentComponent {

  public participants: any[];
  private matches: number;

  constructor(private competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
    });
  }

  generateTournament() {
    // met de formule 0.5n(n-1) berekenen we het aantal wedstrijden
    this.matches = 0.5 * this.participants.length * (this.participants.length - 1);
    console.log(this.matches);
  }
}
