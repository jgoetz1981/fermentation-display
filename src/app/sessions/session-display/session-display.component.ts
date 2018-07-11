import { Component, OnInit, Input } from '@angular/core';
import { Reading } from '../../models/sensor/reading';

const DECIMATE_LEVEL = 100;

@Component({
  selector: 'app-session-display',
  templateUrl: './session-display.component.html',
  styleUrls: ['./session-display.component.css']
})
export class SessionDisplayComponent implements OnInit {

  @Input() sessionName: string;
  @Input() sessionId: string;
  @Input('sessionData') set SessionData(data: Array<Reading>) {
    if (data != null) {
      this.sessionData = data;
      this.decimateGraphData(data);
    }
  }

  public sessionData: Array<Reading>;

  public graphData = [
    { data: [], label: 'Gravity' }
  ];

  public chartLabels = [];
  public readonly lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  public displayedColumns = ['timestamp', 'gravity', 'temperature'];

  constructor() { }

  ngOnInit() {
  }

  private decimateGraphData = (baseData: Array<Reading>) => {
    this.graphData = [
      { data: [], label: 'Gravity' },
      // {data: [], label: 'Temperature'}
    ];
    let delta = 1;
    if (baseData.length > DECIMATE_LEVEL) {
      delta = 10;
    }
    for (let i = 0; i < baseData.length; i += delta) {
      this.chartLabels.push(new Date(baseData[i].timestamp).toLocaleTimeString());
      this.generateGraphPoints(baseData[i]);
    }
  }

  private generateGraphPoints(data: Reading) {
    console.log('pushing: ' + new Date(data.timestamp).valueOf() + ' ' + data.gravity);
    // this.graphData[0].data.push({x: new Date(data.timestamp).valueOf(), y: data.gravity});
    this.graphData[0].data.push({ t: new Date(data.timestamp), y: data.gravity });
    // this.graphData[1].data.push(data.temperature);
  }

}
