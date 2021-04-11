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
import { AppComponent } from './app.component';
import { AudioSourceContainerComponent } from './audio-sources';
import { CampaignSelectorComponent } from './campaigns';
import { CampaignActionsComponent } from './campaigns/campaign-actions/campaign-actions.component';
import { CampaignCreateFormComponent } from './campaigns/forms/create/campaign-create-form.component';
import { CampaignDeleteFormComponent } from './campaigns/forms/delete/campaign-delete-form.component';
import { CampaignEditFormComponent } from './campaigns/forms/edit/campaign-edit-form.component';
import { AddButtonIconComponent, DeleteButtonIconComponent, DoneButtonIconComponent, EditButtonIconComponent } from './common/buttons/icon';
import { EjectButtonComponent, NextButtonComponent, PreviousButtonComponent } from './common/buttons/simple';
import { LoopButtonToggleComponent, ReplaceAllButtonToggleComponent, ShuffleButtonToggleComponent, ToggleButtonComponent } from './common/buttons/toggle';
import { DragDropInputComponent } from './common/forms/dragdrop-input/dragdrop-input.component';
import { VolumeSliderComponent } from './common/sliders';
import { DroplistComponent, DroplistContainerComponent, DroplistHeaderComponent } from './droplists';
import { FilterComponent, FilterListComponent } from './filters';
import { ColourPickerComponent } from './common/forms/colour-picker/colour-picker.component';
import { FilterCreateFormComponent } from './filters/forms/create/filter-create-form.component';
import { FilterEditFormComponent } from './filters/forms/edit/filter-edit-form.component';
import { FiltersFormComponent } from './filters/forms/filters-form.component';
import { NavigationComponent } from './navigation';
import { PlaylistComponent } from './playlists';
import { PlaylistImportFormComponent } from './playlists/playlist-forms/import/playlist-import-form.component';
import { SongComponent, SongListComponent, SongListItemComponent } from './songs';

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
    FilterCreateFormComponent
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
