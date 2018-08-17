import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";
import * as robin from "roundrobin";

@Component({
  selector: 'app-competition-knockout',
  templateUrl: './competition-knockout.component.html',
  styleUrls: ['./competition-knockout.component.scss']
})
export class CompetitionKnockoutComponent {

  public participants: any[];
  public rounds = [];
  public matchList = [];

  constructor(private competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
    });
  }

  generateKnockout() {
/*    // We gebruiken de round robin methode om de wedstrijden in te delen
    this.roundList.push(robin(this.participants.length, this.participants));

    // We loopen door de lijst met rondes en stoppen hem in een nieuwe array
    for (let i = 0; i < this.roundList[0].length; i++) {*/
      const matches = [];
      this.matchList.push(robin(this.participants.length, this.participants));
      let halfSize = Math.floor(this.participants.length / 2);
      for (let i = 0; i < halfSize; i++) {
        matches.push({player1: this.matchList[0][i][0], player2: this.matchList[0][i][1]});
      }
      //this.rounds.push({name: 'Round ' + roundNumber, matches: matches});
    //}

    console.log(this.participants);

    //this.competitionService.addRounds(this.rounds);
  }
}
