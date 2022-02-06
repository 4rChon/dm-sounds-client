import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SongAPIService } from '@app-common/api-services/song-api.service';
import { SongViewModel } from '@app-songs/view-models';
import { SongDeleteComponent } from '../delete/song-delete.component';

@Component({
  selector: 'app-song-index',
  templateUrl: './song-index.component.html'
})
export class SongIndexComponent implements OnInit {
  public songs: Array<SongViewModel> = [];

  constructor(
    private readonly songApiService: SongAPIService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const subscription = this.songApiService.getSongs().subscribe(
      songs => {
        this.songs = songs;

        subscription.unsubscribe();
      }
    );
  }

  public openEditView(id: string): void {
    this.router.navigate(['songs', 'edit', id]);
  }

  public openDeleteDialog(id: string): void {
    this.dialog.open(SongDeleteComponent, { data: id });
  }
}
