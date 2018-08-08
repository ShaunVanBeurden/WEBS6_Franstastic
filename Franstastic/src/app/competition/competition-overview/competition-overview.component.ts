import { Component} from '@angular/core';
import { CompetitionService } from "../../providers/competition.service";
import { Competition } from "../competition";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-competition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.scss']
})
export class CompetitionOverviewComponent  {

  public competitions: any = [];
  public competitionName: string;
  public competitionTypes: string[] = ["Toernooi", "Knockout-Systeem", "Poule-Systeem"];
  public selectedCompetitionType: string;

  constructor(private competitionService: CompetitionService) {
    competitionService.getCompetitionsList().snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    ).subscribe(competitions => {
        competitions.map(competitions => this.competitions.push(competitions)
      );
    });
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
