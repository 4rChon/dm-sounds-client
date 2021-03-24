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
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AudioSourceContainerComponent } from './audio-sources/audio-source-container/audio-source-container.component';
import { CampaignSelectorComponent } from './campaigns/campaign-selector/campaign-selector.component';
import { AddButtonIconComponent } from './common/buttons/icon/add-button-icon/add-button-icon.component';
import { DeleteButtonIconComponent } from './common/buttons/icon/delete-button-icon/delete-button-icon.component';
import { EditButtonIconComponent } from './common/buttons/icon/edit-button-icon/edit-button-icon.component';
import { DoneButtonIconComponent } from './common/buttons/icon/submit-button-icon/done-button-icon.component';
import { EjectButtonComponent } from './common/buttons/simple/eject/eject-button.component';
import { NextButtonComponent } from './common/buttons/simple/next/next-button.component';
import { PreviousButtonComponent } from './common/buttons/simple/previous/previous-button.component';
import { LoopButtonToggleComponent } from './common/buttons/toggle/loop-button-toggle/loop-button-toggle.component';
import { ReplaceAllButtonToggleComponent } from './common/buttons/toggle/replace-all-button-toggle/replace-all-button-toggle.component';
import { ShuffleButtonToggleComponent } from './common/buttons/toggle/shuffle-button-toggle/shuffle-button-toggle.component';
import { ToggleButtonComponent } from './common/buttons/toggle/toggle-button/toggle-button.component';
import { DroplistContainerComponent } from './droplists/droplist-container/droplist-container.component';
import { DroplistHeaderComponent } from './droplists/droplist-header/droplist-header.component';
import { DroplistComponent } from './droplists/droplist-item/droplist-item.component';
import { FilterListComponent } from './filters/filter-list/filter-list.component';
import { FilterComponent } from './filters/filter/filter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaylistComponent } from './playlists/playlist/playlist.component';
import { SongListItemComponent } from './songs/song-list-item/song-list-item.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongComponent } from './songs/song/song.component';

@NgModule({
  declarations: [
    AddButtonIconComponent,
    AppComponent,
    AudioSourceContainerComponent,
    CampaignSelectorComponent,
    DeleteButtonIconComponent,
    DoneButtonIconComponent,
    DroplistComponent,
    DroplistContainerComponent,
    DroplistHeaderComponent,
    EditButtonIconComponent,
    FilterComponent,
    FilterListComponent,
    LoopButtonToggleComponent,
    NavigationComponent,
    PlaylistComponent,
    SongComponent,
    SongListComponent,
    SongListItemComponent,
    ToggleButtonComponent,
    ReplaceAllButtonToggleComponent,
    ShuffleButtonToggleComponent,
    NextButtonComponent,
    PreviousButtonComponent,
    EjectButtonComponent
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
    MatListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
