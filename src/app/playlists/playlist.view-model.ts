import { FilterViewModel } from '../filters';
import { SongViewModel } from '../songs';

export interface PlaylistViewModel {
  id: string;
  name: string;
  thumbnail: string;
  songs: Array<SongViewModel>;
  filters: Array<FilterViewModel>;
  colour: {
    r: number;
    g: number;
    b: number;
  };
  shuffle: boolean;
  loop: boolean;
  replaceAll: boolean;
}
