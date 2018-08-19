import {Component, OnDestroy} from '@angular/core';
import {CompetitionService} from "../../providers/competition.service";
import * as robin from "roundrobin";
import {DragulaService} from "ng2-dragula";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-competition-poule',
  templateUrl: './competition-poule.component.html',
  styleUrls: ['./competition-poule.component.scss']
})
export class CompetitionPouleComponent implements OnDestroy {

  public pouleAmount: number;
  public participants: any[];
  public poules = [];
  public pouleCompetition = [];
  public pouleMatches = [];
  public showGenerate: boolean = false;
  public subs = new Subscription();

  constructor(private competitionService : CompetitionService, private dragulaService: DragulaService) {
    competitionService.getCompetition(competitionService.key).valueChanges().subscribe(competition => {
      if (competition.participants) {
        this.participants = competition.participants;
      }
    });
    this.participantOnDrop();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  participantOnDrop() {
    this.subs.add(this.dragulaService.drop("dragula_poulePlayers")
      .subscribe(({ name, el, target, source, sibling }) => {
        let sourcePoule = source.parentElement.getElementsByTagName("h2")[0].innerText;
        let targetPoule = target.parentElement.getElementsByTagName("h2")[0].innerText;
        let targetPlayer = el.getElementsByTagName("div")[0].innerText;
        console.log("test");

        // We loopen door de poules
        for (let i = 0; i < this.pouleAmount; i++) {
          // We checken of de naam van de poule gelijk is aan de targetPoule, zoja dan voegt hij de versleepte speler toe aan de poule
          if (this.poules[i].name == targetPoule) {
            this.poules[i].players.push({name: targetPlayer});
          } else if (this.poules[i].name == sourcePoule) {
            // We loopen door de spelers van de poule
            for (let j = 0; j < this.poules[i].players.length; j++) {
              // We checken of de naam van de speler gelijk is aan de targetPlayer, zoja dan verwijdert hij de versleepte speler van de oude poule
              if (this.poules[i].players[j].name == targetPlayer) {
                this.poules[i].players.splice(j,1);
              }
            }
          }
        }
      })
    );
  }

  addPoules() {
    this.poules = [];

    if (isNaN(this.pouleAmount)) {
      alert("Je mag alleen cijfers invoeren!")
    } else if (this.participants === undefined || this.pouleAmount * 2 > this.participants.length) {
      alert('Er moeten minimaal 2 spelers per poule zijn!');
    } else {
      let j = 0;
      let playersPerPoule = this.participants.length / this.pouleAmount;
      let playerCount = playersPerPoule;

      for (let i = 0; i < this.pouleAmount; i++) {
        const players = [];
        let poule = i + 1;

        for (j; j < playerCount; j++) {
          players.push(this.participants[j]);
        }
        playerCount = playerCount + playersPerPoule;
        this.poules.push({name: 'poule ' + poule, players: players});
      }
      this.showGenerate = true;
    }
  }

  generateTournament() {
    // Checkt of er een poule is met minder dan 2 spelers
    for (let i = 0; i < this.pouleAmount; i++) {
      if (this.poules[i].players.length < 2) {
        alert('Er moeten minimaal 2 spelers per poule zijn!');
        return;
      }
    }

    for (let i = 0; i < this.pouleAmount; i++) {
      let pouleNumber = i + 1;
      let poulePlayers = this.poules[i].players;

      // We gebruiken de round robin methode om de wedstrijden in te delen
      this.pouleMatches.push(robin(poulePlayers.length, poulePlayers));

      let halfSize = Math.floor(poulePlayers.length / 2);

      const matches = [];
      for (let j = 0; j < this.pouleMatches[i].length; j++) {
        for (let k = 0; k < halfSize; k++) {
          matches.push({player1: this.pouleMatches[i][j][k][0], player2: this.pouleMatches[i][j][k][1]});
        }
      }
      this.pouleCompetition.push({name: 'poule ' + pouleNumber, matches: matches});
    }
    this.competitionService.savePoules(this.pouleCompetition);
  }
}
