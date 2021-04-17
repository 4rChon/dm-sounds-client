export interface PlaylistCreateViewModel {
  name: string;
  filters: Array<string>;
  songs: Array<string>;
  colour: string;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
