import { PlaylistViewModel } from 'src/app/playlists';
import { SongViewModel } from 'src/app/songs';

export interface CampaignEditFormModel {
  id: string;
  name: string;
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
