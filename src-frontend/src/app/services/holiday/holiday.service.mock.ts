import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

import { HolidayServiceBase } from './holiday.service.base';
import { Holiday } from 'src/app/models/holiday.model';

@Injectable({
  providedIn: 'root',
})
export class HolidayServiceMock extends HolidayServiceBase {
  constructor(private http: HttpClient) { super();}

  getCountryHolidays(year: number): Promise<Holiday[]> {
    return this.http.get<Holiday[]>("assets/mocks/holidays.json").pipe(delay(1000)).toPromise();
  }
}
