import { SensorId } from './sensor-ids';

export class Sensor {
  /** The sensorId this represents */
  device: SensorId;
  /** If the sensor reading app should be checking for this sensor and archiving entries */
  enabled: boolean;
  /** The ID that will be used when this is saved. E.G if this is 9 and the device is Black the next entry will be Black-9 */
  nextArchive: number;
  /** The assigned name for the current session, this will be assigned to the archived version */
  name: string;
}
