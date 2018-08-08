import { Component, OnInit } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-competition-participants',
  templateUrl: './competition-participants.component.html',
  styleUrls: ['./competition-participants.component.scss']
})
export class CompetitionParticipantsComponent implements OnInit {

  public singers = [];
  public participantName: string;
  private competitionName: string;
  private competition;

  constructor(private competitionService : CompetitionService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.competitionName = params.id;
    });

    competitionService.getCompetition("-LEjB0lNHvrD9_DKAWa5").valueChanges().subscribe(competition => {
      this.singers = competition.participants;
      this.competition = competition;
    });
  }

  ngOnInit() {
  }

}
