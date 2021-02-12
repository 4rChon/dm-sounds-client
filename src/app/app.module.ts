import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectablePlaylistContainerComponent } from './playlist/selectable-playlist-container/selectable-playlist-container.component';
import { SelectablePlaylistItemComponent } from './playlist/selectable-playlist-item/selectable-playlist-item.component';
import { AddPlaylistComponent } from './playlist/add-playlist/add-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectablePlaylistContainerComponent,
    SelectablePlaylistItemComponent,
    AddPlaylistComponent
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
export class AppModule { }
