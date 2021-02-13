import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaylistComponent } from './playlist/add-playlist/add-playlist.component';
import { PlaylistContainerComponent } from './playlist/playlist-container/playlist-container.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PlaylistContainerComponent
  },
  {
    path: 'add',
    component: AddPlaylistComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
