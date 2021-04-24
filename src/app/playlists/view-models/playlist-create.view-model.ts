import { Colourable, Nameable } from '@app-common/interfaces';

export interface PlaylistCreateViewModel extends Colourable, Nameable {
  filters: Array<string>;
  songs: Array<string>;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
