import { PlaylistViewModel } from '../../playlists';
import { SongViewModel } from '../../songs';

export interface CampaignViewModel {
  _id: string;
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
