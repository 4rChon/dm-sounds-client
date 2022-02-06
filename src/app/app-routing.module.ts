import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignCreateComponent } from '@app-campaigns/views/create/campaign-create.component';
import { CampaignEditComponent } from '@app-campaigns/views/edit/campaign-edit.component';
import { CampaignIndexComponent } from '@app-campaigns/views/index/campaign-index.component';
import { DroplistContainerComponent } from '@app-droplists/droplist-container/droplist-container.component';
import { FilterFormComponent } from '@app-filters/views/filter-form.component';
import { PlaylistCreateComponent } from '@app-playlists/views/create/playlist-create.component';
import { PlaylistEditComponent } from '@app-playlists/views/edit/playlist-edit.component';
import { PlaylistFormComponent } from '@app-playlists/views/import/playlist-import.component';
import { PlaylistIndexComponent } from '@app-playlists/views/index/playlist-index.component';
import { SongDeleteComponent } from '@app-songs/views/delete/song-delete.component';
import { SongEditComponent } from '@app-songs/views/edit/song-edit.component';
import { SongImportComponent } from '@app-songs/views/import/song-import.component';
import { SongIndexComponent } from '@app-songs/views/index/song-index.component';


const routes: Routes = [
  { path: 'dashboard', component: DroplistContainerComponent },
  {
    path: 'songs',
    component: SongIndexComponent,
    children: [
      {
        path: 'delete/:id',
        component: SongDeleteComponent
      }
    ]
  },
  { path: 'songs/edit/:id', component: SongEditComponent },
  { path: 'songs/import', component: SongImportComponent },
  { path: 'playlists', component: PlaylistIndexComponent },
  { path: 'playlists/edit/:id', component: PlaylistEditComponent },
  { path: 'playlists/import', component: PlaylistFormComponent },
  { path: 'playlists/create', component: PlaylistCreateComponent },
  { path: 'filters', component: FilterFormComponent },
  { path: 'campaigns', component: CampaignIndexComponent },
  { path: 'campaigns/edit/:id', component: CampaignEditComponent },
  { path: 'campaigns/create', component: CampaignCreateComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
