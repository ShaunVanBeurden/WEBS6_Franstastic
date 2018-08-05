import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable()
export class CompetitionService {

  private basePath: string = '/competition';

  constructor(private db: AngularFireDatabase) { }

  // Het ophalen van alle competities
  getCompetitionsList(): AngularFireList<any> {
    return this.db.list(this.basePath);
  }

  // Het toevoegen van een competitie
  addCompetition(compName, compType) {
    this.db.list('/competition').push({name: compName, type: compType});
  }
}
