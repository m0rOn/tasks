import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPipe'
})
export class FilterByPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
