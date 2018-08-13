import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // pipe decorator
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ): number {
    const today: Date = new Date(); // this gets the current date and time
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // var dateDifference = Math.abs (value - todayWithNoTime ); // returns value in milliseconds
    const dateDifference = Math.abs (todayWithNoTime - value );
    const secondsInADay = 86400; // 60 seconds*60 minutes in an hour *24 hours
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dateCounter = dateDifferenceSeconds / secondsInADay;

    if  (dateCounter >= 1 ) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
