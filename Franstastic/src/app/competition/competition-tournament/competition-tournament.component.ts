import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";
import * as robin from "roundrobin";

@Component({
  selector: 'app-competition-tournament',
  templateUrl: './competition-tournament.component.html',
  styleUrls: ['./competition-tournament.component.scss']
})
export class CompetitionTournamentComponent {

  public participants: any[];
  public rounds = [];
  public roundList = [];

  constructor(private competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
    });
  }

  generateTournament() {
    // We gebruiken de round robin methode om de wedstrijden in te delen
    this.roundList.push(robin(this.participants.length, this.participants));

    let halfSize = Math.floor(this.participants.length / 2);

    // We loopen door de lijst met rondes en stoppen hem in een nieuwe array
    for (let i = 0; i < this.roundList[0].length; i++) {
      const matches = [];
      const roundNumber = i + 1;
      for (let j = 0; j < halfSize; j++) {
        matches.push({player1: this.roundList[0][i][j][0], player2: this.roundList[0][i][j][1]});
      }
      this.rounds.push({name: 'Round ' + roundNumber, matches: matches});
    }

    this.competitionService.addRounds(this.rounds);
  }
}
