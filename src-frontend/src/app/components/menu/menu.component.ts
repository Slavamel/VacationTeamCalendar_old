import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('appearing', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(-100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  isMenuVisible = false;

  constructor() { }

  ngOnInit() {
  }
  
  onClose(): void {
    this.isMenuVisible = false;
  }

  onOpen(): void {
    this.isMenuVisible = true;
  }
}
