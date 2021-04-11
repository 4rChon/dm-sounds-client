import { FilterViewModel } from '@app-filters/view-models';
import { SongViewModel } from '@app-songs/view-models';

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
