import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../services/data-fetch.service';
import { mockPerformanceData } from './constants/mock-data';
import { TaskModel } from './models/tasks.model';

@Component({
  selector: 'app-performance-widget',
  templateUrl: './performance-widget.component.html',
  styleUrls: ['./performance-widget.component.css']
})
export class PerformanceWidgetComponent implements OnInit {

  public taskList: TaskModel[] = [];
  public userNames: string[] = [];
  public selectedUser = '';

  constructor(private dataService: DataFetchService) { }

  ngOnInit(): void {
    this.fetchTaskData();
    this.userNames = [... new Set(this.taskList.map(el => el.userName).flat())];
  }

  public fetchTaskData(): void {
    this.dataService.getTaskData().subscribe((taskData: any) => {
      this.taskList = taskData[0].map((task: any) => {
        const [taskName, userName, startDate, endDate, status] = task;
        return { taskName, userName: [userName], startDate, endDate, status: [status] };
      }).reduce((reducer: any, accumulator: any) => {
        if (Object.entries(reducer).length === 0) {
          reducer = [accumulator];
          return reducer;
        } else if (!reducer.map((el: TaskModel) => el.taskName).includes(accumulator.taskName)) {
            reducer.push(accumulator);
            return reducer;
        } else {
            reducer.forEach((el: any) => {
              if (el.taskName === accumulator.taskName) {
                el.status = el.status.concat(accumulator.status);
                el.userName = el.userName.concat(accumulator.userName);
              }
            });
            return reducer;
        }
      }, Object.create(null));
    });
  }

  public onUserSelect(event: any): void {
    this.selectedUser = event.value;
  }

}
