import { NgModule } from '@angular/core';
import { HolidayServiceBase } from '../services/holiday/holiday.service.base';
import { HolidayServiceMock } from '../services/holiday/holiday.service.mock';
import { HolidayServiceReal } from '../services/holiday/holiday.service.real';

import { UserServiceBase } from '../services/user/user.service.base';
import { UserServiceMock } from '../services/user/user.service.mock';
import { UserServiceReal } from '../services/user/user.service.real';

@NgModule({
  providers: [ 
    { provide: HolidayServiceBase, useClass: HolidayServiceReal },
    { provide: UserServiceBase, useClass: UserServiceReal }
   ]
})
export class AppServicesModule { }