import DroplistItem from './droplist-item.interface';

interface Droplist {
  active: boolean;
  name: string;
  items: Array<DroplistItem>;
}

export default Droplist;
