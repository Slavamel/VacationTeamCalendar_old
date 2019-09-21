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
    let month: any;
    for(month in user.vacation) {
      let daysArr = user.vacation[month];
      for(let i = 0; i < daysArr.length; i++) {
        var id = `date-${month}-${daysArr[i]}`;
        var elem = document.getElementById(id);
        let className = `user-${user.id}`;
        elem.classList.remove(className);
      }
    }
  }

  addUserStyles(user: User): void {
    let month: any;
    for(month in user.vacation) {
      let daysArr = user.vacation[month];
      for(let i = 0; i < daysArr.length; i++) {
        var id = `date-${month}-${daysArr[i]}`;
        var elem = document.getElementById(id);
        let className = `user-${user.id}`;
        elem.classList.add(className);
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
          background: repeating-linear-gradient(45deg, ${users[i].color}, ${users[i].color} 5px, ${users[k].color} 5px, ${users[k].color} 10px); 
        }\n`;
      }
    }
    document.head.appendChild(style);
  }
}