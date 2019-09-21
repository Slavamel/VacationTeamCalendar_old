import { Component, OnInit } from '@angular/core';

import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { HolidayServiceBase } from 'src/app/services/holiday/holiday.service.base';
import { Month } from 'src/app/models/month.model';
import { UserServiceBase } from 'src/app/services/user/user.service.base';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthes: Month[];
  users: User[];
  year = 2019;

  constructor(
    private calendarService: CalendarService, 
    private holidayService: HolidayServiceBase,
    private userService: UserServiceBase) { }

  ngOnInit() {
    this.holidayService.getHolidays()
      .then((holidays) => this.monthes = this.calendarService.getCalendar(2019, holidays));

    this.userService.getUsers()
      .then((users) => {
        this.users = users;
        this.users.forEach(user => {
          user.isChecked = true;
        });
      });
  }

  isHoliday(dayNumber: number, isHoliday: boolean): boolean {
    return dayNumber > 4 || isHoliday;
  }
}