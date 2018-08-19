import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-matches',
  templateUrl: './competition-matches.component.html',
  styleUrls: ['./competition-matches.component.scss']
})
export class CompetitionMatchesComponent {

  public poules: any[];
  public rounds: any[];
  public matchDateTime: Date;
  public competitionTypes: any = ({toernooi: false, ko: false, poule: false});

  constructor(public competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      this.checkCompetitionType(competition);
    });
  }

  checkCompetitionType(competition) {
    if (competition.type == "Toernooi") {
      this.competitionTypes.toernooi = true;
      if (competition.rounds) {
        this.rounds = competition.rounds;
      }
    } else if (competition.type == "Knockout-Systeem") {
      this.competitionTypes.ko = true;
      if (competition.rounds) {
        this.rounds = competition.rounds;
      }
    } else if (competition.type == "Poule-Systeem") {
      this.competitionTypes.poule = true;
      if (competition.poules) {
        this.poules = competition.poules;
      }
    }
  }

  saveMatchDatePoule(poule, match) {
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

  saveMatchDateRound(round, match) {
    for (let i = 0; i < this.rounds.length; i++) {
      if (this.rounds[i] == round) {
        for (let j = 0; j < this.rounds[i].matches.length; j++) {
          if (this.rounds[i].matches[j] == match) {
            this.rounds[i].matches[j].dateTime = this.matchDateTime;
          }
        }
      }
    }
    this.competitionService.saveRounds(this.rounds);
  }
}
