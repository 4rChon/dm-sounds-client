import { Item, Image } from 'ytpl';

export interface PlaylistModel {
  id: string;
  title: string;
  bestThumbnail: Image;
  items: Array<Item>;
  loop: boolean;
  shuffle: boolean;
}
