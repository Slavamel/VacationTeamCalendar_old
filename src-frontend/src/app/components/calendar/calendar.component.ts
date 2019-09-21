import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthes: any;
  year = 2019;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService.getHolidays().then((holidays) => {
      this.monthes = this.calendarService.getCalendarForYear(2019, holidays);
    });
  }

  isHoliday(dayNumber: number, isHoliday: boolean): boolean {
    return dayNumber > 4 || isHoliday;
  }
}
