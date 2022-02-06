import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlaylistAPIService } from '@app-common/api-services/playlist-api.service';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { PlaylistDeleteComponent } from '../delete/playlist-delete.component';

@Component({
  selector: 'app-playlist-index',
  templateUrl: './playlist-index.component.html'
})
export class PlaylistIndexComponent implements OnInit {
  public playlists: Array<PlaylistViewModel> = [];

  constructor(
    private readonly playlistApiService: PlaylistAPIService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const subscription = this.playlistApiService.getPlaylists().subscribe(
      playlists => {
        console.log(playlists);
        this.playlists = playlists;

        subscription.unsubscribe();
      }
    );
  }

  public openEditView(id: string): void {
    this.router.navigate(['playlists', 'edit', id]);
  }

  public openDeleteDialog(id: string): void {
    this.dialog.open(PlaylistDeleteComponent, { data: id });
  }
}
