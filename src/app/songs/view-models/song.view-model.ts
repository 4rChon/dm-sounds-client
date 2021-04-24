import { Colourable, Indexable, Nameable } from '@app-common/interfaces';
import { FilterViewModel } from '@app-filters/view-models';

export interface SongViewModel extends Colourable, Indexable, Nameable {
  songId: string;
  filters: Array<FilterViewModel>;
  thumbnail: string;
  loop: boolean;
  replaceAll: boolean;
}
