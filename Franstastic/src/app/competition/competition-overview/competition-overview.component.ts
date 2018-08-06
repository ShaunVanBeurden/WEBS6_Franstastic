import { Component, OnInit } from '@angular/core';
import { CompetitionService } from "../../providers/competition.service";

@Component({
  selector: 'app-competition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.scss']
})
export class CompetitionOverviewComponent  {

  public competitions: any[];
  public competitionName: string;
  public competitionTypes: string[] = ["Toernooi", "Knockout-Systeem", "Poule-Systeem"];
  public selectedCompetitionType: string;

  constructor(private competitionService: CompetitionService) {
    // het subscriben op de angularfirelist van competities
    competitionService.getCompetitionsList().valueChanges().subscribe(competitions => {
      this.competitions = competitions;
    });

    competitionService.getCompetitionsList().snapshotChanges()
  }

  onChangeType(selectedCompType) {
    // Ophalen van het geselecteerde type competitie
    this.selectedCompetitionType = selectedCompType;
  }

  addCompetition() {
    // Check om te kijken of er een competitietype is geselecteerd
    if (this.selectedCompetitionType === undefined) {
      alert("Kies het type van de competitie!")
    } else {
      this.competitionService.addCompetition(this.competitionName, this.selectedCompetitionType);
    }
  }
}
