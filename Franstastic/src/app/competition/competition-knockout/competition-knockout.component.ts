import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-knockout',
  templateUrl: './competition-knockout.component.html',
  styleUrls: ['./competition-knockout.component.scss']
})
export class CompetitionKnockoutComponent {

  public participants: any[];
  public rounds = [];

  constructor(public competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
    });
  }

  generateKnockout() {
    // Checkt voor een oneven aantal deelnemers
    if (this.isOdd(this.participants.length)) {
      alert("Je kan de competitie niet starten met een oneven aantal deelnemers!")
    } else {
      const matches = [];
      for (let i = 0; i < this.participants.length; i = i + 2) {
        matches.push({player1: this.participants[i], player2: this.participants[i + 1]});
      }
      this.rounds.push({matches: matches, name: 'Round 1'});
    }
    this.competitionService.saveRounds(this.rounds);
  }

  isOdd(participantAmount) {
    return Math.abs(participantAmount % 2) == 1;
  }
}
