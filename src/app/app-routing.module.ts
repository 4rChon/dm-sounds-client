import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistContainerComponent } from './playlist/playlist-container/playlist-container.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PlaylistContainerComponent
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
