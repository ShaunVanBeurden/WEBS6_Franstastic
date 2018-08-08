import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";

@Injectable()
export class CompetitionService {

  private basePath: string = '/competition';
  private competition: AngularFireObject<any> = null;

  constructor(private db: AngularFireDatabase) { }

  // Het ophalen van alle competities
  getCompetitionsList(): AngularFireList<any> {
    return this.db.list(this.basePath);
  }

  // Het toevoegen van een competitie
  addCompetition(compName, compType) {
    this.db.list('/competition').push({name: compName, type: compType});
  }

  // Het toevoegen van een deelnemer aan de competitie
  addParticipant(compParticipants) {
    this.db.list('/competition').push({participants: compParticipants});
  }

  // Het ophalen van een specifieke competitie
  getCompetition(key: string): AngularFireObject<any> {
    const competitionPath = `${this.basePath}/${key}`;
    this.competition = this.db.object(competitionPath);
    return this.competition;
  }
}
