import { FilterViewModel } from '../filters';

export interface SongViewModel {
  id: string;
  loop: boolean;
  replaceAll: boolean;
  name: string;
  filters: Array<FilterViewModel>;
  thumbnail: string;
  colour: {
    r: number;
    g: number;
    b: number;
  };
}
