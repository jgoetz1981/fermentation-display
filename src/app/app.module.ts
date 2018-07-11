import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import {  ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ActiveSensorsComponent } from './active-sensors/active-sensors.component';
import { SavedSessionComponent } from './sessions/saved-session/saved-session.component';
import { RoutingModule } from './routing/routing.module';
import { ActiveSessionComponent } from './sessions/active-session/active-session.component';
import { SessionDisplayComponent } from './sessions/session-display/session-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveSensorsComponent,
    SavedSessionComponent,
    ActiveSessionComponent,
    SessionDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    RoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
