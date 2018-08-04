import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompetitionOverviewComponent } from './competition/competition-overview/competition-overview.component';
import { LoginService } from "./providers/login.service";
import { environment } from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompetitionOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Initialize Firebase module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
