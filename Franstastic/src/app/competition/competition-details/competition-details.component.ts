import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent {

  public competitionName: string;
  public competitionTypes: any = ({toernooi: false, ko: false, poule: false});

  constructor(private route: ActivatedRoute, public competitionService: CompetitionService) {
    // Het ophalen van de parameters uit de actieve route
    this.route.params.subscribe(params => {
      competitionService.getCompetition(params.id).valueChanges().subscribe(competition => {
        this.checkCompetitionType(competition);
        competitionService.key = params.id;
      });
    });
  }

  checkCompetitionType(competition) {
    this.competitionName = competition.name;
    if (competition.type == "Toernooi") {
      this.competitionTypes.toernooi = true;
    } else if (competition.type == "Knockout-Systeem") {
      this.competitionTypes.ko = true;
    } else if (competition.type == "Poule-Systeem") {
      this.competitionTypes.poule = true;
    }
  }
}
