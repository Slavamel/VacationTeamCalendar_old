import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UserServiceBase } from './user.service.base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceMock extends UserServiceBase {
  constructor(private http: HttpClient) { super(); }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>("assets/mocks/users.json").toPromise();
  }
}
