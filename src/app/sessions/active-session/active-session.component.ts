import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { Reading } from '../../models/sensor/reading';
import { Session } from '../../models/sensor/session';
import { SensorId } from '../../models/sensor/sensor-ids';
import { Sensor } from '../../models/sensor/sensor';

@Component({
  selector: 'app-active-session',
  templateUrl: './active-session.component.html',
  styleUrls: ['./active-session.component.css']
})
export class ActiveSessionComponent implements OnInit {

  /** THe info for the session */
  public sensorInfo: Observable<Sensor>;
  /** The session Data */
  public sessionData: Observable<Array<Reading>>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService) { }

  ngOnInit() {
    const sensorId: SensorId = this.route.snapshot.paramMap.get('sensorId') as SensorId;
    this.sensorInfo = this.api.getSensorInfo(sensorId);
    this.sessionData = this.api.getSensorReadings(sensorId);
  }
}
