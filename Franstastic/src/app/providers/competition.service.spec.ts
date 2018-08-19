import { TestBed, inject } from '@angular/core/testing';

import { CompetitionService } from './competition.service';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../environments/environment";

describe('Service: CompetitionService', () => {
  let service = CompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule],
      providers: [CompetitionService]
    });
  });

  it('should be created', inject([CompetitionService], (service: CompetitionService) => {
    this.service = service;
    expect(service).toBeTruthy();
  }));

  it('should return the expected competition', (done: DoneFn) => {
    this.service.getCompetition('-LEjB0lNHvrD9_DKAWa5').valueChanges().subscribe(competition => {
      expect(competition.name).toBe('KO');
      done();
    });
  });

  it('should save the rounds to our database', (done: DoneFn) => {
    let roundList = [];
    let matches = [];

    this.service.key = '-LKC9MM-wc2xAY71hDk7';
    matches.push({player1: {name: 'Piet'}, player2: {name: 'Jan'}});
    roundList.push({matches: matches, name: "Round 1"});
    this.service.saveRounds(roundList);

    this.service.getCompetition('-LKC9MM-wc2xAY71hDk7').valueChanges().subscribe(competition => {
      expect(roundList).toEqual(competition.rounds);
      done();
    });
  });

  it('should save the poules to our database', (done: DoneFn) => {
    let poules = [];
    let matches = [];

    this.service.key = '-LKCDT-9WA75bSaciEqz';
    matches.push({player1: {name: 'Vis'}, player2: {name: 'Beer'}});
    poules.push({matches: matches, name: 'poule 1'});
    this.service.savePoules(poules);

    this.service.getCompetition('-LKCDT-9WA75bSaciEqz').valueChanges().subscribe(competition => {
      expect(poules).toEqual(competition.poules);
      done();
    });
  });

  /*it('should add a participant to our competition', (done: DoneFn) => {
    let participants = [];
    this.service.getCompetition('-LKCDT-9WA75bSaciEqz').valueChanges().subscribe(competition => {
      this.participants = competition.participants;
      this.service.addParticipant('Kat', competition);
    });

    this.service.getCompetition('-LKCDT-9WA75bSaciEqz').valueChanges().subscribe(competition => {
      expect(this.participants).toContain(competition.participants.name("Kat"));
      done();
    });
  });*/

  it('should return a list of all competitions', (done: DoneFn) => {
    this.service.getCompetitionsList().valueChanges().subscribe(competitions => {
      this.service.getCompetition('-LKCDT-9WA75bSaciEqz').valueChanges().subscribe(competition => {
        expect(competitions).toContain(competition);
        done();
      });
    });
  });
});
