import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompetitionOverviewComponent } from './competition/competition-overview/competition-overview.component';
import { LoginService } from "./providers/login.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompetitionOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
