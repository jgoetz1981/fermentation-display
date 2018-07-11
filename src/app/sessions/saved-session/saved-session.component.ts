import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { Reading } from '../../models/sensor/reading';
import { Session } from '../../models/sensor/session';
import { SensorId } from '../../models/sensor/sensor-ids';

const DECIMATE_LEVEL = 100;

@Component({
  selector: 'app-saved-session',
  templateUrl: './saved-session.component.html',
  styleUrls: ['./saved-session.component.css']
})
export class SavedSessionComponent implements OnInit {

  /** THe info for the session */
  public sessionInfo: Observable<Session>;
  /** The session Data */
  public sessionData: Observable<Array<Reading>>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService) { }

  ngOnInit() {
    this.sessionInfo = this.api.getArchivedSession(this.route.snapshot.paramMap.get('session'));
    this.sessionData = this.api.getArchivedSessionReadings(this.route.snapshot.paramMap.get('session'));
  }

}
