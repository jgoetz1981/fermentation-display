import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Session } from '../models/sensor/session';
import { Setting } from '../models/sensor/setting';
import { SensorId } from '../models/sensor/sensor-ids';
import { Reading } from '../models/sensor/reading';
import { Sensor } from '../models/sensor/sensor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly SESSIONS = '/sessions';
  private readonly ACTIVE_SENSORS = this.SESSIONS + '/active';
  private readonly ARCHIVE_SENSOR_DATA = this.SESSIONS + '/archive';
  private readonly READINGS = '/readings';
  private readonly ARCHIVED_SENSOR_READINGS = this.READINGS + '/archive';

  constructor(private http: HttpClient) { }

  /**
   * Gets the array of saved sessions
   */
  public getAllArchivedSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(environment.apiBase + this.SESSIONS);
  }

  /**
   * Gets an array of Active Sensors (actually the settings of those sensors)
   */
  public getAllActiveSessions(): Observable<Setting[]> {
    return this.http.get<Setting[]>(environment.apiBase + this.ACTIVE_SENSORS);
  }

  /**
   * Gets the info about a sensor
   * @param sensor The sensor to get info about
   */
  public getSensorInfo(sensor: SensorId): Observable<Sensor> {
    return this.http.get<Sensor>(environment.apiBase + this.ACTIVE_SENSORS + '/' + sensor);
  }

  /**
   * Returns all of the readings that are not assigned to an achived session of the given sensor
   * @param sensor The sensor to get readings for
   */
  public getSensorReadings(sensor: SensorId): Observable<Reading[]> {
    return interval(30000).pipe(
      switchMap(() => {
        return this.http.get<Reading[]>(environment.apiBase + this.READINGS + '/' + sensor);
      }));
  }

  /**
   * Returns the information for an archived session
   * @param sessionId The archived session you want to look up
   */
  public getArchivedSession(sessionId: string): Observable<Session> {
    return this.http.get<Session>(environment.apiBase + this.ARCHIVE_SENSOR_DATA + '/' + sessionId);
  }

  /**
   * Assigns all the active readings that are associated with the given sensor to an archived sesion of that sensor
   * @param sensor The sensor to archive readings for
   */
  public archiveSensorReadings(sensor: SensorId): Observable<any> {
        return this.http.post(environment.apiBase + this.ARCHIVE_SENSOR_DATA + '/' + sensor, {});
  }

  /**
   * Deletes all the readings associated with the given sensor that aren't assigned to an old sensor id
   * @param sensor The sensor data to clear
   */
  public clearActiveSensorSession(sensor: SensorId): Observable<any> {
    return this.http.delete(environment.apiBase + this.ACTIVE_SENSORS + '/' + sensor);
  }

  /**
   * Gets all of the readings in the database
   */
  public getAllReadings(): Observable<Reading[]> {
    return this.http.get<Reading[]>(environment.apiBase + this.READINGS);
  }

  /**
   * Gets all readings associated with an archived session
   * @param sensorSession The sensor session to get data for
   */
  public getArchivedSessionReadings(sensorSession: string): Observable<Reading[]> {
    return this.http.get<Reading[]>(environment.apiBase + this.ARCHIVED_SENSOR_READINGS + '/' + sensorSession);
  }

  /**
   * Deletes the archived session and all of the readings associated with it
   * @param sensorSession the sensor session to delete
   */
  public clearArchivedSession(sensorSession: string): Observable<any> {
    return this.http.delete(environment.apiBase + this.SESSIONS + '/' + sensorSession);
  }
}
