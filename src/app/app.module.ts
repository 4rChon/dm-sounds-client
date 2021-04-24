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
import { CampaignCreateFormComponent } from '@app-campaigns/forms/create/campaign-create-form.component';
import { CampaignDeleteFormComponent } from '@app-campaigns/forms/delete/campaign-delete-form.component';
import { CampaignEditFormComponent } from '@app-campaigns/forms/edit/campaign-edit-form.component';
import { AddButtonIconComponent, DeleteButtonIconComponent, DoneButtonIconComponent, EditButtonIconComponent } from '@app-common/buttons/icon';
import { EjectButtonComponent, NextButtonComponent, PreviousButtonComponent } from '@app-common/buttons/simple';
import { LoopButtonToggleComponent, ReplaceAllButtonToggleComponent, ShuffleButtonToggleComponent, ToggleButtonComponent } from '@app-common/buttons/toggle';
import { ColourPickerComponent } from '@app-common/forms/colour-picker/colour-picker.component';
import { DragDropInputComponent } from '@app-common/forms/dragdrop-input/dragdrop-input.component';
import { FilterPickerComponent } from '@app-common/forms/filter-picker/filter-picker.component';
import { VolumeSliderComponent } from '@app-common/sliders';
import { DroplistContainerComponent } from '@app-droplists/droplist-container/droplist-container.component';
import { DroplistHeaderComponent } from '@app-droplists/droplist-header/droplist-header.component';
import { DroplistComponent } from '@app-droplists/droplist-item/droplist-item.component';
import { FilterListComponent } from '@app-filters/filter-list/filter-list.component';
import { FilterComponent } from '@app-filters/filter/filter.component';
import { FilterCreateFormComponent } from '@app-filters/forms/create/filter-create-form.component';
import { FilterEditFormComponent } from '@app-filters/forms/edit/filter-edit-form.component';
import { FiltersFormComponent } from '@app-filters/forms/filters-form.component';
import { PlaylistCreateFormComponent } from '@app-playlists/playlist-forms/create/playlist-create-form.component';
import { PlaylistDeleteFormComponent } from '@app-playlists/playlist-forms/delete/playlist-delete-form.component';
import { PlaylistEditFormComponent } from '@app-playlists/playlist-forms/edit/playlist-edit-form.component';
import { PlaylistImportFormComponent } from '@app-playlists/playlist-forms/import/playlist-import-form.component';
import { PlaylistComponent } from '@app-playlists/playlist/playlist.component';
import { SongDeleteFormComponent } from '@app-songs/forms/delete/song-delete-form.component';
import { SongEditFormComponent } from '@app-songs/forms/edit/song-edit-form.component';
import { SongImportFormComponent } from '@app-songs/forms/import/song-import-form.component';
import { SongListItemComponent } from '@app-songs/song-list-item/song-list-item.component';
import { SongListComponent } from '@app-songs/song-list/song-list.component';
import { SongComponent } from '@app-songs/song/song.component';
import { AppComponent } from './app.component';
import { AudioSourceContainerComponent } from './audio-sources/audio-source-container/audio-source-container.component';
import { NavigationComponent } from './navigation/navigation.component';

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
    EjectButtonComponent,
    VolumeSliderComponent,
    PlaylistImportFormComponent,
    CampaignCreateFormComponent,
    CampaignEditFormComponent,
    DragDropInputComponent,
    CampaignActionsComponent,
    CampaignDeleteFormComponent,
    FiltersFormComponent,
    ColourPickerComponent,
    FilterEditFormComponent,
    FilterCreateFormComponent,
    SongImportFormComponent,
    FilterPickerComponent,
    SongEditFormComponent,
    SongDeleteFormComponent,
    PlaylistCreateFormComponent,
    PlaylistEditFormComponent,
    PlaylistDeleteFormComponent
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
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
