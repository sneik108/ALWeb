import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromSecsToLocaleDate'
})
export class FromSecsToLocaleDatePipe implements PipeTransform {

  transform(secs: number): any {
    const date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    return date.toLocaleDateString();
  }

}
