import { Colourable, Indexable, Nameable } from '@app-common/interfaces';

export interface PlaylistIndexViewModel extends Colourable, Nameable, Indexable {
  thumbnail: string;
  songs: Array<string>;
  filters: Array<string>;
  shuffle: boolean;
  loop: boolean;
  replaceAll: boolean;
}
