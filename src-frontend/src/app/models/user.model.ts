import { Holiday } from './holiday.model';

export class User {
  id: number;
  name: string;
  color: string;
  vacation: Holiday[];
  isChecked: boolean;
}