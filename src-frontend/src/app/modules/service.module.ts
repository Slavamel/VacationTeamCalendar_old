import { NgModule } from '@angular/core';
import { HolidayServiceBase } from '../services/holiday/holiday.service.base';
import { HolidayServiceMock } from '../services/holiday/holiday.service.mock';

@NgModule({
  providers: [ 
    { provide: HolidayServiceBase, useClass: HolidayServiceMock }
   ]
})
export class AppServicesModule { }