import { FilterViewModel } from '../../filters';

export interface SongViewModel {
  _id: string;
  song_id: string;
  loop: boolean;
  replaceAll: boolean;
  name: string;
  filters: Array<FilterViewModel>;
  thumbnail: string;
  colour: string;
}
