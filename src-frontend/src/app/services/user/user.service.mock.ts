import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

import { User } from 'src/app/models/user.model';
import { UserServiceBase } from './user.service.base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceMock extends UserServiceBase {
  constructor(private http: HttpClient) { super(); }

  getUsers(year: number): Promise<User[]> {
    return this.http.get<User[]>("assets/mocks/users.json").pipe(delay(2000)).toPromise();
  }
}
