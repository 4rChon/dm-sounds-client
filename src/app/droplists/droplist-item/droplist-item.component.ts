import { Component, Input, OnInit } from '@angular/core';
import DroplistItemType from '../../playlists/playlist-item-type.enum';
import DroplistItem from '../droplist-item.interface';
import PlaylistViewModel from '../../playlists/playlist.view-model';
import SongViewModel from '../../songs/song.view-model';

@Component({
  selector: 'app-droplist-item',
  templateUrl: './droplist-item.component.html',
  styleUrls: ['./droplist-item.component.less']
})
export class DroplistComponent implements OnInit {
  @Input() item!: DroplistItem;
  @Input() active!: boolean;
  public song?: SongViewModel;
  public playlist?: PlaylistViewModel;

  public ngOnInit(): void {
    switch (this.item.type) {
      case DroplistItemType.Playlist:
        this.playlist = this.item.data as PlaylistViewModel;
        break;
      case DroplistItemType.Song:
        this.song = this.item.data as SongViewModel;
        break;
    }
  }
}
