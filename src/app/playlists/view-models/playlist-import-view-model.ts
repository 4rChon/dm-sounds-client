export interface PlaylistImportViewModel {
  playlistId: string;
  name: string;
  filters: Array<string>;
  colour: string;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
