import { TestBed, inject } from '@angular/core/testing';

import { CompetitionService } from './competition.service';
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";

describe('Service: CompetitionService', () => {
  let service = CompetitionService;
  let db: AngularFireDatabase;
  let competitions = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule],
      providers: [CompetitionService]
    });

    this.service = new CompetitionService(db);
  });

  it('should be created', inject([CompetitionService], (service: CompetitionService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of all competitions', (done: DoneFn) => {
      this.service.getCompetitionsList().valueChanges().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });
});
