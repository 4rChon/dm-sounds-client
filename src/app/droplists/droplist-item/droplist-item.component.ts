import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioSourceService } from 'src/app/audio-sources/audio-source.service';
import { PlaylistViewModel } from 'src/app/playlists/playlist.view-model';
import { SongViewModel } from 'src/app/songs/view-models/song.view-model';
import { DroplistItemType } from '../droplist-item-type.enum';
import { DroplistItem } from '../droplist-item.interface';

@Component({
  selector: 'app-droplist-item',
  templateUrl: './droplist-item.component.html',
  styleUrls: ['./droplist-item.component.less']
})
export class DroplistComponent implements OnInit {
  @Input() item!: DroplistItem;
  @Input() active!: boolean;
  @Output() eject = new EventEmitter();
  public song?: SongViewModel;
  public playlist?: PlaylistViewModel;

  constructor(private readonly audioSourceService: AudioSourceService) { }

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

  public onEject(id: string): void {
    this.audioSourceService.ejectAudioSource(id).then(() =>
      this.eject.emit()
    );
  }
}
