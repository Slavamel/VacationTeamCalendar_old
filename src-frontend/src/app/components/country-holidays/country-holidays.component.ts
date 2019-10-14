import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.component.html',
  styleUrls: ['./country-holidays.component.css']
})
export class CountryHolidaysComponent implements OnInit {
  private startDate: Date;
  private endDate: Date;

  constructor(private styleService: StyleService) { }

  ngOnInit() { }

  onDateClicked(date: Date): void {
    if (!this.startDate) {
      this.startDate = date;
    } else {
      this.endDate = date;
    }

    this.styleService.highlightBetweenTwoDates(this.startDate, this.endDate);

    if (this.startDate && this.endDate) {
      this.startDate = null;
      this.endDate = null;
    }
  }

  onMouseOver(dateId: string): void {
    // console.log(dateId);
  }
}
