import { Colourable, Nameable } from '@app-common/interfaces';

export interface PlaylistImportViewModel extends Colourable, Nameable {
  playlistId: string;
  filters: Array<string>;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
