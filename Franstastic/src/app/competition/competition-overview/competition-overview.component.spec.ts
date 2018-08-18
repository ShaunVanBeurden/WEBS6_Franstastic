import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { CompetitionOverviewComponent } from './competition-overview.component';
import { FormsModule } from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {LoginComponent} from "../../login/login.component";
import {CompetitionService} from "../../providers/competition.service";

describe('CompetitionOverviewComponent', () => {
  let component: CompetitionOverviewComponent;
  let fixture: ComponentFixture<CompetitionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppRoutingModule,
      ],
      declarations: [ CompetitionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get competitions', () => {
    inject(
      [CompetitionService],
      ( dataService: CompetitionService) =>
      {
        expect(component.competitions).toEqual(8);
      }
    )
  })
});
