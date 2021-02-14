import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './common/toggle-button/toggle-button.component';
import { AddPlaylistComponent } from './playlist/add-playlist/add-playlist.component';
import { PlaylistContainerComponent } from './playlist/playlist-container/playlist-container.component';
import { ActivePlaylistItemComponent } from './playlist/playlist-item/active-playlist-item/active-playlist-item.component';
import { InactivePlaylistItemComponent } from './playlist/playlist-item/inactive-playlist-item/inactive-playlist-item.component';
import { PreviewPlaylistItemComponent } from './playlist/playlist-item/preview-playlist-item/preview-playlist-item.component';
import { PlaylistNavComponent } from './playlist/playlist-nav/playlist-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    InactivePlaylistItemComponent,
    ActivePlaylistItemComponent,
    PreviewPlaylistItemComponent,
    AddPlaylistComponent,
    PlaylistNavComponent,
    PlaylistContainerComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
