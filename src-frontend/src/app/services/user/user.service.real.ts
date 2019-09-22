import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/models/user.model';
import { UserServiceBase } from './user.service.base';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceReal extends UserServiceBase {
  constructor(private http: HttpClient) { super(); }

  getUsers(year: number): Promise<User[]> {
    return this.http.get<User[]>(environment.url + "/api/holiday/get-all-users-holidays/2019", {withCredentials: true}).toPromise();
  }
}
