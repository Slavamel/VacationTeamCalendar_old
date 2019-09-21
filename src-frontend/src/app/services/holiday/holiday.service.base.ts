import { Injectable } from '@angular/core';
import { Holiday } from 'src/app/models/holiday.model';


@Injectable({
  providedIn: 'root',
})
export class HolidayServiceBase {
  getHolidays(): Promise<Holiday[]> {
    throw new Error("Not implemented");
  }
}
