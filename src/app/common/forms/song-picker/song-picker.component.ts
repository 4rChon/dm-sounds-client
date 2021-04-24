import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongAPIService } from '@app-api-services/song-api.service';
import { CampaignSelectorComponent } from '@app-campaigns/campaign-selector/campaign-selector.component';
import { DroplistItemType } from '@app-droplists/droplist-item-type.enum';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { SongViewModel } from '@app-songs/view-models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-song-picker',
  templateUrl: 'song-picker.component.html',
})

export class SongPickerComponent implements OnInit {
  public availableSongs: Array<DroplistItem> = [];
  public addedSongs: Array<DroplistItem> = [];
  public fetchingSongs = true;

  @Input() songs: Array<SongViewModel> = [];
  @Output() songsChange = new EventEmitter<Array<SongViewModel>>();

  constructor(private readonly songAPIService: SongAPIService) { }

  ngOnInit(): void {
    this.addedSongs = this.songs.map(data => ({ type: DroplistItemType.Song, data }));

    this.songAPIService.getSongs()
      .pipe(finalize(() => this.fetchingSongs = false))
      .subscribe({
        next: songs => this.availableSongs = songs.map(data => ({ type: DroplistItemType.Song, data }))
      });
  }

  public onSongsChange(droplistItems: Array<DroplistItem>): void {
    console.log(droplistItems);
    this.songsChange.emit(droplistItems.map(droplistItem => droplistItem.data as SongViewModel));
  }
}
