import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  setUsersStyles(users: User[]): void {
    this.addGlobalCalsses(users);
    for(let i = 0; i < users.length; i++) {
      this.addUserStyles(users[i]);
    }
  }

  removeUserStyles(user: User): void {
    this.chageUserStyles(user, false);
  }

  addUserStyles(user: User): void {
    this.chageUserStyles(user, true);
  }

  private chageUserStyles(user: User, isAdding: boolean): void {
    for(let y = 0; y < user.holidays.length; y++) {
      let daysArr = user.holidays[y].days;

      for(let i = 0; i < daysArr.length; i++) {
        var elem = document.getElementById(`date-${user.holidays[y].month}-${daysArr[i]}`);

        if (isAdding) {
          elem.classList.add(`user-${user.id}`);
          if (i == 0) elem.classList.add('first-vacation-day');
          if (i == (daysArr.length - 1)) elem.classList.add('last-vacation-day');
        } else {
          elem.classList.remove(`user-${user.id}`);
          if (i == 0) elem.classList.remove('first-vacation-day');
          if (i == (daysArr.length - 1)) elem.classList.remove('last-vacation-day');
        }
      }
    }
  }

  private addGlobalCalsses(users: User[]): void {
    let style = document.createElement('style');
    for(let i = 0; i < users.length; i++) {
      style.innerHTML += `.user-${users[i].id} { background-color: ${users[i].color}; }\n`

      for(let k =0; k < users.length; k++) {
        if (k == i) { continue; }
        style.innerHTML += `.user-${users[i].id}.user-${users[k].id} { 
          background: repeating-linear-gradient(0deg, ${users[i].color}, ${users[i].color} 5px, ${users[k].color} 5px, ${users[k].color} 10px); 
          border-radius: 0;
        }\n`;
      }
    }
    document.head.appendChild(style);
  }
}