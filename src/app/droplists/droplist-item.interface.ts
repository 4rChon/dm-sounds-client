import { DroplistItemType } from '.';
import { PlaylistViewModel } from '../playlists';
import { SongViewModel } from '../songs';

export interface DroplistItem {
  type: DroplistItemType;
  data: PlaylistViewModel | SongViewModel;
}
