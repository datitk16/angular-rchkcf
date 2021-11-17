import { Component, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('calendar', { static: false }) calendar: MatCalendar<Date>;

  name = 'Angular';
  date = new Date();

  changeDate() {
    console.log(this.calendar);
    const today = new Date();
    let future = new Date();
    future.setDate(today.getDate() + 31);
    this.date = future;
    this.calendar._goToDateInView(future, 'month');
  }
}
