import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-spectate',
  templateUrl: './competition-spectate.component.html',
  styleUrls: ['./competition-spectate.component.scss']
})
export class CompetitionSpectateComponent {

  public poules: any[];
  public matchDateTime: Date;

  constructor(private competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.poules) {
        this.poules = competition.poules;
      }
    });
  }

  saveMatchDate(poule, match) {
    for (let i = 0; i < this.poules.length; i++) {
      if (this.poules[i] == poule) {
        for (let j = 0; j < this.poules[i].matches.length; j++) {
          if (this.poules[i].matches[j] == match) {
            this.poules[i].matches[j].dateTime = this.matchDateTime;
          }
        }
      }
    }
    this.competitionService.savePoules(this.poules);
  }
}
