import { DroplistItem } from './droplist-item.interface';

export interface Droplist {
  active: boolean;
  name: string;
  items: Array<DroplistItem>;
}
