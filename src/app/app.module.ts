import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './common/toggle-button/toggle-button.component';
import { ActivePlaylistItemComponent } from './playlist/active/active-playlist-item.component';
import { AddPlaylistComponent } from './playlist/add/add-playlist.component';
import { PlaylistContainerComponent } from './playlist/container/playlist-container.component';
import { EjectComponent } from './playlist/controls/eject/eject.component';
import { LoopComponent } from './playlist/controls/loop/loop.component';
import { NextComponent } from './playlist/controls/next/next.component';
import { PreviousComponent } from './playlist/controls/previous/previous.component';
import { ReplaceAllComponent } from './playlist/controls/replace-all/replace-all.component';
import { ShuffleComponent } from './playlist/controls/shuffle/shuffle.component';
import { VolumeComponent } from './playlist/controls/volume/volume.component';
import { InactivePlaylistItemComponent } from './playlist/inactive/inactive-playlist-item.component';
import { PreviewPlaylistItemComponent } from './playlist/preview/preview-playlist-item.component';
import { SoundItemListComponent } from './sound-item/list/sound-item-list.component';
import { SoundItemComponent } from './sound-item/sound-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InactivePlaylistItemComponent,
    ActivePlaylistItemComponent,
    PreviewPlaylistItemComponent,
    AddPlaylistComponent,
    PlaylistContainerComponent,
    ToggleButtonComponent,
    SoundItemListComponent,
    NextComponent,
    PreviousComponent,
    LoopComponent,
    ShuffleComponent,
    ReplaceAllComponent,
    EjectComponent,
    VolumeComponent,
    SoundItemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
