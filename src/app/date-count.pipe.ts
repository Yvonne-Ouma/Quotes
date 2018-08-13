import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // pipe decorator
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ): number {
    let today: Date = new Date(); // this gets the current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // var dateDifference = Math.abs (value - todayWithNoTime ); // returns value in milliseconds
    var dateDifference = Math.abs (todayWithNoTime - value );
    const secondsInADay = 86400; // 60 seconds*60 minutes in an hour *24 hours
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInADay;

    if  (dateCounter >= 1 ) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
