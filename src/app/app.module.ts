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
import { CampaignSelectorComponent } from './campaigns/campaign-selector/campaign-selector.component';
import { ToggleButtonComponent } from './common/toggle-button/toggle-button.component';
import { DroplistContainerComponent } from './droplists/droplist-container/droplist-container.component';
import { DroplistComponent } from './droplists/droplist-item/droplist-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlaylistComponent } from './playlists/playlist/playlist.component';
import { SongComponent } from './songs/song/song.component';
import { FilterComponent } from './filters/filter/filter.component';
import { FilterListComponent } from './filters/filter-list/filter-list.component';
import { AudioSourceContainerComponent } from './audio-sources/audio-source-container/audio-source-container.component';
import { SongListComponent } from './songs/song-list/song-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
    NavigationComponent,
    DroplistContainerComponent,
    DroplistComponent,
    SongComponent,
    PlaylistComponent,
    CampaignSelectorComponent,
    FilterComponent,
    FilterListComponent,
    AudioSourceContainerComponent,
    SongListComponent
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
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatListModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
