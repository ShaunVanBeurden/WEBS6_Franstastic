import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-spectate',
  templateUrl: './competition-spectate.component.html',
  styleUrls: ['./competition-spectate.component.scss']
})
export class CompetitionSpectateComponent {

  public poules: any[];
  public rounds: any[];
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
}
