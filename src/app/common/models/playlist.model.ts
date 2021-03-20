import { Item, Image } from 'ytpl';

export interface PlaylistModel {
  id: string;
  name: string;
  bestThumbnail: Image;
  items: Array<Item>;
  loop: boolean;
  shuffle: boolean;
  replaceAll: boolean;
}
