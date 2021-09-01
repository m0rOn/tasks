import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from '../models/tasks.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(namesList: TaskModel[], selectedName: string): TaskModel[] {
    if (selectedName !== '') {
      return namesList.filter(el => {
        return el.userName.includes(selectedName);
      });
    }
    return namesList;
  }

}
