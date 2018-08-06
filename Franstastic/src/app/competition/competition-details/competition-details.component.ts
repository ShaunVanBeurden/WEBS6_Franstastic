import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent {

  public compName: string;

  constructor(private route: ActivatedRoute) {
    // Het ophalen van de parameters uit de actieve route
    this.route.params.subscribe(params => {
      this.compName = params.id;
    });
  }
}
