import { PlaylistViewModel } from '@app-playlists/view-models';
import { SongViewModel } from '@app-songs/view-models';

export interface CampaignViewModel {
  _id: string;
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
