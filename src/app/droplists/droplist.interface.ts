import { DroplistItem } from '.';

export interface Droplist {
  active: boolean;
  name: string;
  items: Array<DroplistItem>;
}
