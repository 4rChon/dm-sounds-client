import DroplistItemType from '../playlists/playlist-item-type.enum';
import PlaylistViewModel from '../playlists/playlist.view-model';
import SongViewModel from '../songs/song.view-model';

export default interface DroplistItem {
  type: DroplistItemType;
  data: PlaylistViewModel | SongViewModel;
}
