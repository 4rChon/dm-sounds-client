import FilterViewModel from '../filters/filter.view-model';

export default interface SongViewModel {
  id: string;
  loop: boolean;
  name: string;
  filters: Array<FilterViewModel>;
  thumbnail: string;
  colour: {
    r: number;
    g: number;
    b: number;
  };
}
