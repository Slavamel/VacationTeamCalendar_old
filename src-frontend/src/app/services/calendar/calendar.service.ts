import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Day } from 'src/app/models/day.model';
import { Month } from 'src/app/models/month.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private holidays;
  private monthNames = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June",
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ]

  constructor(private http: HttpClient) { }

  getCalendarForYear(year: number, holidays) {
    let result = [];
    this.holidays = holidays;
    for(let i=1; i<13; i++) {
      result.push(this.getMonth(i, year));
    }

    return result;
  }

  getHolidays(): Promise<any> {
    return this.http.get("assets/mocks/holidays.json").toPromise();
  }

  private getMonth(monthNumber: number, year: number): Month {
    let firstDay = new Date(year, monthNumber-1, 1).getDay();
    firstDay = firstDay == 0 ? 7 : firstDay;
    const daysInMonth = new Date(year, monthNumber, 0).getDate();

    let day = 1;
    let month = [];
    let week = [];

    for (let i = 1; ; i++) {
      if (day > daysInMonth && week.length == 0) { break; }

      if (i < firstDay || day > daysInMonth) {
        week.push(new Day("", false));
      } else {
        week.push(new Day(day.toString(), this.isHoliday(monthNumber, day)));
        day++;
      }

      if (week.length == 7) {
        month.push(week);
        week = [];
      }
    }

    const result = new Month(this.monthNames[monthNumber-1], month);

    return result;
  }

  private isHoliday(monthNumber: number, day: number) {
    const monthHolidays: number[] = this.holidays[monthNumber.toString()];
    const result = monthHolidays ? monthHolidays.includes(day) : false;
    return result;
  }
}