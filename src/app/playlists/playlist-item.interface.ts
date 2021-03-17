import PlaylistItemType from './playlist-item-type.enum';
import PlaylistViewModel from '../playlists/playlist.view-model';
import SongViewModel from '../songs/song.view-model';

export default interface IPlaylistItem {
  type: PlaylistItemType;
  data: PlaylistViewModel | SongViewModel;
}
