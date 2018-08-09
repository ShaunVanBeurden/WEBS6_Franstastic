import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";

@Injectable()
export class CompetitionService {

  private basePath: string = '/competition';
  private competition: AngularFireObject<any> = null;
  public key: string;

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
  addParticipant(participantName, competition) {
    const participantList = [];

    participantList.push({name: participantName});
    if (competition.participants) {
      for (let i = 0; i < competition.participants.length; i++) {
        participantList.push(competition.participants[i])
      }
    }

    const itemsRef = this.db.list('/competition/');
    // to get a key, check the Example app below
    itemsRef.update(this.key, { participants: participantList });
  }

  // Het ophalen van een specifieke competitie
  getCompetition(key: string): AngularFireObject<any> {
    const competitionPath = `${this.basePath}/${key}`;
    this.competition = this.db.object(competitionPath);
    return this.competition;
  }
}
