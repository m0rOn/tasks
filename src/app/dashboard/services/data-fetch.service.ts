import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockPerformanceData } from '../performance-widget/constants/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  public getTaskData(): any {
    return of([mockPerformanceData.taskData]);
  }

}
