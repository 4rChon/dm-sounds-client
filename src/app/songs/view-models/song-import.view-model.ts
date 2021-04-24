import { Colourable, Nameable } from '@app-common/interfaces';

export interface SongImportViewModel extends Colourable, Nameable {
  songId: string;
  filters: Array<string>;
  loop: boolean;
  replaceAll: boolean;
}
