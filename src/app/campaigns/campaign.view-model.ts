import { PlaylistViewModel } from '../playlists';
import { SongViewModel } from '../songs';

export interface CampaignViewModel {
  id: string;
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
