import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectablePlaylistContainerComponent } from './playlist/selectable-playlist-container/selectable-playlist-container.component';

const routes: Routes = [{ path: 'playlists', component: SelectablePlaylistContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
