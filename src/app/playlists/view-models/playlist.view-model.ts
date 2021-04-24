import { Colourable, Indexable, Nameable } from '@app-common/interfaces';
import { FilterViewModel } from '@app-filters/view-models';
import { SongViewModel } from '@app-songs/view-models';

export interface PlaylistViewModel extends Colourable, Nameable, Indexable {
  thumbnail: string;
  songs: Array<SongViewModel>;
  filters: Array<FilterViewModel>;
  shuffle: boolean;
  loop: boolean;
  replaceAll: boolean;
}
