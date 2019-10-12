import { Component, OnInit } from '@angular/core';

import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { HolidayServiceBase } from 'src/app/services/holiday/holiday.service.base';
import { Month } from 'src/app/models/month.model';
import { UserServiceBase } from 'src/app/services/user/user.service.base';
import { User } from 'src/app/models/user.model';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  monthes: Month[];
  users: User[];
  year = new Date().getFullYear();

  isLoading = false;

  constructor(
    private calendarService: CalendarService, 
    private holidayService: HolidayServiceBase,
    private userService: UserServiceBase,
    private styleService: StyleService) { }

  ngOnInit() {
    this.init(this.year);
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

  onCurrentYearChanged(year: number): void {
    this.init(year);
  }

  private init(year: number): void {
    this.isLoading = true;
    this.monthes = null;
    this.users = null;
    this.holidayService.getCountryHolidays(year)
      .then((holidays) => {
        this.monthes = this.calendarService.getCalendar(year, holidays);
        this.getUsers(year);
      });
  }

  private getUsers(year: number): void {
    this.userService.getUsers(year)
      .then((users) => this.handleGetUsersResponse(users))
      .finally(() => this.isLoading = false);
  }

  private handleGetUsersResponse(users: User[]): void {
    this.users = users;
    this.users.forEach(user => {
      user.isChecked = true;
    });
    this.styleService.setUsersStyles(users);
  }
}
