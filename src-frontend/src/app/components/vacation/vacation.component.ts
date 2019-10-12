import { Component, OnInit } from '@angular/core';

import { UserServiceBase } from 'src/app/services/user/user.service.base';
import { User } from 'src/app/models/user.model';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  users: User[];
  isLoading = false;

  constructor(
    private userService: UserServiceBase,
    private styleService: StyleService) { }

  ngOnInit() { }

  onUserClicked(user: User, isChecked: boolean): void {
    if (isChecked) {
      this.styleService.addUserStyles(user);
    } else {
      this.styleService.removeUserStyles(user);
    }
  }

  onCalendarLoaded(year: number) {
    this.getUsers(year);
  }

  private getUsers(year: number): void {
    this.isLoading = true;
    this.userService.getUsers(year)
      .then((users) => this.handleGetUsersResponse(users))
      .finally(() => this.isLoading = false);
  }

  private handleGetUsersResponse(users: User[]): void {
    this.users = users;
    this.users.forEach(user => {
      user.isChecked = true;
    });
    this.styleService.setUsersStyles(users);
  }
}
