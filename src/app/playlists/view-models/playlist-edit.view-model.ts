import { Colourable, Indexable, Nameable } from '@app-common/interfaces';

export interface PlaylistEditViewModel extends Colourable, Indexable, Nameable {
  filters: Array<string>;
  songs: Array<string>;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
