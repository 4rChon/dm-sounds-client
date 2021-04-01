import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistImportFormComponent } from '../playlists/playlist-forms/import/playlist-import-form.component';
import { CampaignCreateFormComponent } from '../campaigns/forms/create/campaign-create-form.component';
import { CampaignEditFormComponent } from '../campaigns/forms/edit/campaign-edit-form.component';

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
    // this.dialog.open(SongImportFormComponent);
  }

  public openPlaylistImportForm(): void {
    this.dialog.open(PlaylistImportFormComponent);
  }

  public openCampaignCreateForm(): void {
    this.dialog.open(CampaignCreateFormComponent);
  }

  public openPlaylistCreateForm(): void {

  }

}
