import PlaylistItemType from './playlist-item-type.enum';
import PlaylistViewModel from './view-models/playlist.view-model';
import SongViewModel from './view-models/song.view-model';

export default interface IPlaylistItem {
  type: PlaylistItemType;
  data: PlaylistViewModel | SongViewModel;
}
