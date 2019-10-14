export class Holiday {
  id: number;
  startDate: Date;
  endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    this.startDate = startDate;
    this.endDate = endDate;
  }
}