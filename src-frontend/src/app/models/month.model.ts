import { Day } from 'src/app/models/day.model';

export class Month {
  name: string;
  weeks: Day[];

  constructor(name: string, weeks: Day[]) {
    this.name = name;
    this.weeks = weeks;
  }
}