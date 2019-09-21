import { Component, OnInit } from '@angular/core';

import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { HolidayServiceBase } from 'src/app/services/holiday/holiday.service.base';
import { Month } from 'src/app/models/month.model';
import { UserServiceBase } from 'src/app/services/user/user.service.base';
import { User } from 'src/app/models/user.model';
import { StyleService } from 'src/app/services/style/style.service';

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
    private userService: UserServiceBase,
    private styleService: StyleService) { }

  ngOnInit() {
    this.holidayService.getHolidays()
      .then((holidays) => this.monthes = this.calendarService.getCalendar(2019, holidays));

    this.userService.getUsers()
      .then((users) => {
        this.users = users;
        this.users.forEach(user => {
          user.isChecked = true;
        });
        this.styleService.setUsersStyles(users);
      });
  }

  isHoliday(dayNumber: number, isHoliday: boolean): boolean {
    return dayNumber > 4 || isHoliday;
  }

  getDateId(monthNum: number, date: number): string {
    if (!date) return "";
    return "date-" + (monthNum + 1) + "-" + date;
  }

  onUserClicked(user: User, isChecked: boolean): void {
    if (isChecked) {
      this.styleService.addUserStyles(user);
    } else {
      this.styleService.removeUserStyles(user);
    }
  }
}
