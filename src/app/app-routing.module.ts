import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignCreateFormComponent } from '@app-campaigns/forms/create/campaign-create-form.component';
import { DroplistContainerComponent } from '@app-droplists/droplist-container/droplist-container.component';
import { FiltersFormComponent } from '@app-filters/forms/filters-form.component';
import { PlaylistCreateFormComponent } from '@app-playlists/playlist-forms/create/playlist-create-form.component';
import { PlaylistImportFormComponent } from '@app-playlists/playlist-forms/import/playlist-import-form.component';
import { SongImportFormComponent } from '@app-songs/forms/import/song-import-form.component';


const routes: Routes = [
  { path: 'dashboard', component: DroplistContainerComponent },
  { path: 'import/song', component: SongImportFormComponent },
  { path: 'import/playlist', component: PlaylistImportFormComponent },
  { path: 'create/campaign', component: CampaignCreateFormComponent },
  { path: 'create/playlist', component: PlaylistCreateFormComponent },
  { path: 'edit/filters', component: FiltersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
