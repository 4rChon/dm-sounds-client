import { PlaylistViewModel } from 'src/app/playlists';
import { SongViewModel } from 'src/app/songs';

export interface CampaignCreateFormViewModel {
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
