import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioComponent } from './audio/audio.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistSettingsComponent } from './playlist/playlist-settings/playlist-settings.component';
import { PlaylistControlsComponent } from './playlist/playlist-controls/playlist-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    PlaylistComponent,
    PlaylistSettingsComponent,
    PlaylistControlsComponent,
    AudioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
