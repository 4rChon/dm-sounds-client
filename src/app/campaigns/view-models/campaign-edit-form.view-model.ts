import { PlaylistViewModel } from 'src/app/playlists';
import { SongViewModel } from 'src/app/songs';

export interface CampaignEditFormViewModel {
  _id: string;
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
