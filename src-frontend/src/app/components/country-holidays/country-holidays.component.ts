import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style/style.service';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.component.html',
  styleUrls: ['./country-holidays.component.css']
})
export class CountryHolidaysComponent implements OnInit {

  constructor(private styleService: StyleService) { }

  ngOnInit() { }

  onDateClicked(dateId: string): void {
    this.styleService.toggleHighlightHolidayClass(dateId);
  }
}
