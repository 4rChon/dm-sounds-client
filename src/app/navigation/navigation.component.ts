import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistCreateFormComponent } from '@app-playlists/playlist-forms/create/playlist-create-form.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CampaignCreateFormComponent } from '../campaigns/forms/create/campaign-create-form.component';
import { FiltersFormComponent } from '../filters/forms/filters-form.component';
import { PlaylistImportFormComponent } from '../playlists/playlist-forms/import/playlist-import-form.component';
import { SongImportFormComponent } from '../songs/forms/import/song-import-form.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly dialog: MatDialog) { }

  public openSongImportForm(): void {
    this.dialog.open(SongImportFormComponent);
  }

  public openPlaylistImportForm(): void {
    this.dialog.open(PlaylistImportFormComponent);
  }

  public openCampaignCreateForm(): void {
    this.dialog.open(CampaignCreateFormComponent);
  }

  public openPlaylistCreateForm(): void {
    this.dialog.open(PlaylistCreateFormComponent);
  }

  public openFiltersEditForm(): void {
    this.dialog.open(FiltersFormComponent);
  }

}
