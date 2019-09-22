import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceBase {
  getUsers(year: number): Promise<User[]> {
    throw new Error("Not implemented");
  }
}
