import { Indexable, Nameable } from '@app-common/interfaces';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { SongViewModel } from '@app-songs/view-models';

export interface CampaignViewModel extends Indexable, Nameable {
  playlists: Array<PlaylistViewModel>;
  songs: Array<SongViewModel>;
}
