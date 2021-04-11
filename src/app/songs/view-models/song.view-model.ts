import { FilterViewModel } from '@app-filters/view-models';

export interface SongViewModel {
  _id: string;
  songId: string;
  name: string;
  filters: Array<FilterViewModel>;
  thumbnail: string;
  colour: string;
  loop: boolean;
  replaceAll: boolean;
}
