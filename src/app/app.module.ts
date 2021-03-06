import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaptionComponent } from './caption/caption.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SportAndTeamTypeComponent } from './sport-and-team-type/sport-and-team-type.component';
import { VersusComponent } from './versus/versus.component';
import { PlayerAndLocationComponent } from './player-and-location/player-and-location.component';
import { DurationAndWeatherComponent } from './duration-and-weather/duration-and-weather.component';
import { AudienceAndInjuryComponent } from './audience-and-injury/audience-and-injury.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    SportAndTeamTypeComponent,
    VersusComponent,
    PlayerAndLocationComponent,
    DurationAndWeatherComponent,
    AudienceAndInjuryComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
