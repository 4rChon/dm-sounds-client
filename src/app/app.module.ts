import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRouteReuseStrategy } from './common/app-route-reuse-strategy';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: AppRouteReuseStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
