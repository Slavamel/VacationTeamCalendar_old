import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceBase {
  getUsers(year: number): Promise<User[]> {
    throw new Error("Not implemented");
  }

  convertToDates(users: User[]): User[] {
    users.forEach(u => {
      u.holidays.forEach(h => {
        h.startDate = new Date(h.startDate);
        h.endDate = new Date(h.endDate);
      })
    })
    return users;
  }
}
