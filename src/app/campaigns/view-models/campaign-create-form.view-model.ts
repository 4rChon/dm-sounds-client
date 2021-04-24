import { Nameable } from '@app-common/interfaces';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { SongViewModel } from '@app-songs/view-models';

export interface CampaignCreateFormViewModel extends Nameable {
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
