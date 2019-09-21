import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { UserServiceBase } from './user.service.base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceReal extends UserServiceBase {
  constructor(private http: HttpClient) { super(); }

  getUsers(): Promise<User[]> {
    throw new Error("Not implemented");
  }
}
