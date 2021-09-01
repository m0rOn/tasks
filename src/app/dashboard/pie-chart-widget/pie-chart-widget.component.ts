import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist';
import { mockPerformanceData } from '../performance-widget/constants/mock-data';
import { DataFetchService } from '../services/data-fetch.service';

@Component({
  selector: 'app-pie-chart-widget',
  templateUrl: './pie-chart-widget.component.html',
  styleUrls: ['./pie-chart-widget.component.css']
})
export class PieChartWidgetComponent implements OnInit {

  public taskTypes: any;
  public taskValues: number[] = [];
  public taskLabels: string[] = [];

  constructor(private dataService: DataFetchService) { }

  ngOnInit(): void {
    this.fetchTaskData();
    this.taskLabels = this.taskTypes.map((el: any) => el.status);
    this.taskValues = this.taskTypes.map((el: any) => el.count);
    this.generateChart();
  }

  public fetchTaskData(): void {
    this.dataService.getTaskData().subscribe((taskData: any) => {
      this.taskTypes = taskData[0].map((task: any) => {
        const [taskName, userName, startDate, endDate, status] = task;
        return status;
      }).reduce((reducer: any, accumulator: any) => {
        if (Object.entries(reducer).length === 0) {
          reducer = [{
            status: accumulator,
            count: 1,
          }];
          return reducer;
        } else if (!reducer.map((el: any) => el.status).includes(accumulator)) {
            reducer.push({status: accumulator, count: 1});
            return reducer;
        } else {
            reducer.forEach((el: any) => {
              if (el.status === accumulator) {
                el.count++;
              }
            });
            return reducer;
        }
      }, Object.create(null));
    });
  }

  public generateChart(): void {
    const data: Plotly.Data[] = [{
      values: this.taskValues,
      labels: this.taskLabels,
      type: 'pie'
    }];

    const layout = {
      height: 400,
      width: 500
    };
    Plotly.newPlot('myDiv', data, layout);
  }

}
