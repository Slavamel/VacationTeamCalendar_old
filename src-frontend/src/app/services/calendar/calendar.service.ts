import { Injectable } from '@angular/core';

import { Day } from 'src/app/models/day.model';
import { Month } from 'src/app/models/month.model';
import { Holiday } from 'src/app/models/holiday.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private holidays: Holiday[];
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
  ];

  getCalendar(year: number, holidays: Holiday[]): Month[] {
    let result: Month[] = [];
    this.holidays = holidays;
    for(let i=1; i<13; i++) {
      result.push(this.getMonth(i, year));
    }

    return result;
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

  private isHoliday(monthNumber: number, day: number): boolean {
    const holiday = this.holidays.filter((h) => h.month == monthNumber);
    if (!holiday || holiday.length == 0) return false;
    const monthHolidays: number[] = this.holidays.filter((h) => h.month == monthNumber)[0].days;
    const result = monthHolidays ? monthHolidays.includes(day) : false;
    return result;
  }
}