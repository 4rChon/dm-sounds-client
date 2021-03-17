import PlaylistViewModel from '../playlists/playlist.view-model';
import SongViewModel from '../songs/song.view-model';

export default interface CampaignViewModel {
  id: string;
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
