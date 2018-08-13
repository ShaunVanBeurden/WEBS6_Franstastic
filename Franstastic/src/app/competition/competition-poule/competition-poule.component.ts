import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-poule',
  templateUrl: './competition-poule.component.html',
  styleUrls: ['./competition-poule.component.scss']
})
export class CompetitionPouleComponent {

  public pouleAmount: number;
  public participants: any[];
  public poules = [];

  constructor(private competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
    });
  }

  addPoules() {
    if (isNaN(this.pouleAmount)) {
      alert("Je mag alleen cijfers invoeren!")
    } else if (this.pouleAmount * 2 > this.participants.length) {
      alert('Er moeten minimaal 2 spelers per poule zijn!');
    } else {
      let j = 0;
      let playersPerPoule = this.participants.length / this.pouleAmount;
      let playerCount = playersPerPoule;

      for (let i = 0; i < this.pouleAmount; i++) {
        const players = []
        let poule = i + 1;

        for (j; j < playerCount; j++) {
          players.push(this.participants[j]);
        }
        playerCount = playerCount + playersPerPoule;
        this.poules.push({name: 'poule' + poule, players: players});
      }
    }
  }
}
