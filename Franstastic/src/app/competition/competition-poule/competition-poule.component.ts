import { Component, OnInit } from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";

@Component({
  selector: 'app-competition-poule',
  templateUrl: './competition-poule.component.html',
  styleUrls: ['./competition-poule.component.scss']
})
export class CompetitionPouleComponent implements OnInit {

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

  ngOnInit() {
  }

  addPoules() {
    if (isNaN(this.pouleAmount)) {
      alert("Je mag alleen cijfers invoeren!")
    } else if (this.pouleAmount * 2 > this.participants.length) {
      alert('Er moeten minimaal 2 spelers per poule zijn!');
    } else {
      for (let i = 1; i <= this.pouleAmount; i++) {
        this.poules.push({name: 'poule' + i });
        // elke poule moet spelers hebben op basis van een formule
        //for ( let j = 0; j < this.participants.length / this.pouleAmount)
      }

      console.log(this.poules);
    }
  }
}
