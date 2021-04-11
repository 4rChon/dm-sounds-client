import { PlaylistViewModel } from '@app-playlists/view-models';
import { SongViewModel } from '@app-songs/view-models';
import { DroplistItemType } from './droplist-item-type.enum';

export interface DroplistItem {
  type: DroplistItemType;
  data: PlaylistViewModel | SongViewModel;
}
