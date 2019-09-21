import { Component, OnInit } from '@angular/core';

import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { MonthEnum } from 'src/app/models/enums/month.enum';
import { HolidayServiceBase } from 'src/app/services/holiday/holiday.service.base';
import { Month } from 'src/app/models/month.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthes: Month[];
  year = 2019;

  constructor(
    private calendarService: CalendarService, 
    private holidayService: HolidayServiceBase) { }

  ngOnInit() {
    this.holidayService.getHolidays().then((holidays) => {
      this.monthes = this.calendarService.getCalendar(2019, holidays);
    });
  }

  isHoliday(dayNumber: number, isHoliday: boolean): boolean {
    return dayNumber > 4 || isHoliday;
  }
}
