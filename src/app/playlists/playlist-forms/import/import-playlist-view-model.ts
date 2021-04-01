export interface ImportPlaylistViewModel {
  id: string;
  filters: Array<string>;
  colour: { r: number, g: number, b: number };
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
