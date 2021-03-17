import FilterViewModel from '../filters/filter.view-model';
import SongViewModel from '../songs/song.view-model';

export default interface PlaylistViewModel {
  id: string;
  name: string;
  thumbnail: string;
  songs: Array<SongViewModel>;
  filters: Array<FilterViewModel>;
  colour: {
    r: number;
    g: number;
    b: number;
  };
  shuffle: boolean;
  loop: boolean;
  replaceAll: boolean;
}
