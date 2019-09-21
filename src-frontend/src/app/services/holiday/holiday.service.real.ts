import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HolidayServiceBase } from './holiday.service.base';
import { Holiday } from 'src/app/models/holiday.model';

@Injectable({
  providedIn: 'root',
})
export class HolidayServiceReal extends HolidayServiceBase {
  constructor(private http: HttpClient) { super();}

  getHolidays(): Promise<Holiday[]> {
    return this.http.get<Holiday[]>("assets/mocks/holidays.json").toPromise();
  }
}
