import { Component } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-competition-participants',
  templateUrl: './competition-participants.component.html',
  styleUrls: ['./competition-participants.component.scss']
})
export class CompetitionParticipantsComponent {

  public participants = [];
  public participantName: string;
  public competition;

  constructor(private competitionService : CompetitionService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
      this.competition = competition;
    });
  }

  addParticipant() {
    this.competitionService.addParticipant(this.participantName, this.competition);
  }

  deleteParticipant(participant) {
    var index = this.participants.indexOf(participant, 0);
    if (index > -1) {
      this.participants.splice(index, 1);
    }
    this.competitionService.deleteParticipant(this.participants);
  }
}
