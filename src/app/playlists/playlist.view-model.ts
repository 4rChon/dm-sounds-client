import { FilterViewModel } from '../filters';
import { SongViewModel } from '../songs';

export interface PlaylistViewModel {
  _id: string;
  name: string;
  thumbnail: string;
  songs: Array<SongViewModel>;
  filters: Array<FilterViewModel>;
  colour: string;
  shuffle: boolean;
  loop: boolean;
  replaceAll: boolean;
}
