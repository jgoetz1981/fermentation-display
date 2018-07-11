import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SavedSessionComponent } from '../sessions/saved-session/saved-session.component';
import { ActiveSessionComponent } from '../sessions/active-session/active-session.component';

const routes: Routes = [
  {path: 'session/:session', component: SavedSessionComponent},
  {path: 'sensor/:sensorId', component: ActiveSessionComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
