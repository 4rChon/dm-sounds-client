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
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignActionsComponent } from '@app-campaigns/campaign-actions/campaign-actions.component';
import { CampaignSelectorComponent } from '@app-campaigns/campaign-selector/campaign-selector.component';
import { CampaignCreateComponent } from '@app-campaigns/views/create/campaign-create.component';
import { CampaignDeleteComponent } from '@app-campaigns/views/delete/campaign-delete.component';
import { CampaignEditComponent } from '@app-campaigns/views/edit/campaign-edit.component';
import { CampaignIndexComponent } from '@app-campaigns/views/index/campaign-index.component';
import { AudioSourceContainerComponent } from '@app-common/audio-sources/audio-source-container/audio-source-container.component';
import { AddButtonIconComponent, DeleteButtonIconComponent, DoneButtonIconComponent, EditButtonIconComponent } from '@app-common/buttons/icon';
import { EjectButtonComponent, NextButtonComponent, PreviousButtonComponent } from '@app-common/buttons/simple';
import { LoopButtonToggleComponent, ReplaceAllButtonToggleComponent, ShuffleButtonToggleComponent, ToggleButtonComponent } from '@app-common/buttons/toggle';
import { ColourPickerComponent } from '@app-common/forms/colour-picker/colour-picker.component';
import { DragDropInputComponent } from '@app-common/forms/dragdrop-input/dragdrop-input.component';
import { FilterPickerComponent } from '@app-common/forms/filter-picker/filter-picker.component';
import { SongPickerComponent } from '@app-common/forms/song-picker/song-picker.component';
import { IndexItemComponent } from '@app-common/index-item/index-item.component';
import { VolumeSliderComponent } from '@app-common/sliders';
import { DroplistContainerComponent } from '@app-droplists/droplist-container/droplist-container.component';
import { DroplistHeaderComponent } from '@app-droplists/droplist-header/droplist-header.component';
import { DroplistComponent } from '@app-droplists/droplist-item/droplist-item.component';
import { FilterListComponent } from '@app-filters/filter-list/filter-list.component';
import { FilterComponent } from '@app-filters/filter/filter.component';
import { FilterCreateFormComponent } from '@app-filters/views/create/filter-create-form.component';
import { FilterEditFormComponent } from '@app-filters/views/edit/filter-edit.component';
import { FilterFormComponent } from '@app-filters/views/filter-form.component';
import { PlaylistComponent } from '@app-playlists/playlist/playlist.component';
import { PlaylistCreateComponent } from '@app-playlists/views/create/playlist-create.component';
import { PlaylistDeleteComponent } from '@app-playlists/views/delete/playlist-delete.component';
import { PlaylistEditComponent } from '@app-playlists/views/edit/playlist-edit.component';
import { PlaylistFormComponent } from '@app-playlists/views/import/playlist-import.component';
import { PlaylistIndexComponent } from '@app-playlists/views/index/playlist-index.component';
import { SongListItemComponent } from '@app-songs/song-list-item/song-list-item.component';
import { SongListComponent } from '@app-songs/song-list/song-list.component';
import { SongComponent } from '@app-songs/song/song.component';
import { SongDeleteComponent } from '@app-songs/views/delete/song-delete.component';
import { SongEditComponent } from '@app-songs/views/edit/song-edit.component';
import { SongImportComponent } from '@app-songs/views/import/song-import.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistPickerComponent } from './common/forms/playlist-picker/playlist-picker.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SongIndexComponent } from './songs/views/index/song-index.component';

@NgModule({
  declarations: [
    AddButtonIconComponent,
    AppComponent,
    AudioSourceContainerComponent,
    CampaignIndexComponent,
    CampaignSelectorComponent,
    CampaignCreateComponent,
    CampaignEditComponent,
    CampaignActionsComponent,
    CampaignDeleteComponent,
    ColourPickerComponent,
    DeleteButtonIconComponent,
    DoneButtonIconComponent,
    DragDropInputComponent,
    DroplistComponent,
    DroplistContainerComponent,
    DroplistHeaderComponent,
    EditButtonIconComponent,
    EjectButtonComponent,
    FilterCreateFormComponent,
    FilterComponent,
    FilterEditFormComponent,
    FilterFormComponent,
    FilterListComponent,
    FilterPickerComponent,
    IndexItemComponent,
    LoopButtonToggleComponent,
    NavigationComponent,
    NextButtonComponent,
    PlaylistComponent,
    PlaylistIndexComponent,
    PlaylistFormComponent,
    PlaylistPickerComponent,
    PlaylistCreateComponent,
    PlaylistEditComponent,
    PlaylistDeleteComponent,
    PreviousButtonComponent,
    ReplaceAllButtonToggleComponent,
    ShuffleButtonToggleComponent,
    SongComponent,
    SongListComponent,
    SongListItemComponent,
    SongPickerComponent,
    SongImportComponent,
    SongEditComponent,
    SongDeleteComponent,
    SongIndexComponent,
    ToggleButtonComponent,
    VolumeSliderComponent,
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
    MatTooltipModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
