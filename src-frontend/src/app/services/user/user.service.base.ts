import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceBase {
  getUsers(): Promise<User[]> {
    throw new Error("Not implemented");
  }
}
