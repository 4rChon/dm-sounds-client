export interface PlaylistEditViewModel {
  _id: string;
  name: string;
  filters: Array<string>;
  songs: Array<string>;
  colour: string;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
