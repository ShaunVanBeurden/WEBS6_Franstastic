import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent],
  entryComponents: [LoginComponent],
  providers: [],
})
export class CompetitionModule { }
