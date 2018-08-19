import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from "./providers/login.service";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
import { CompetitionService } from "./providers/competition.service";
import { DragulaModule } from 'ng2-dragula';
import {CompetitionModule} from "./competition/competition.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CompetitionModule,
    AppRoutingModule,
    FormsModule,
    DragulaModule.forRoot(),
    //Initialize Firebase module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    LoginService,
    CompetitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
