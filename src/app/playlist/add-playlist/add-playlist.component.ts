import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/common/api.service';
import { PlaylistFormModel } from 'src/app/common/models/playlist-form.model';


@Component({
  selector: 'app-add-playlist',
  templateUrl: 'add-playlist.component.html',
  styleUrls: ['add-playlist.component.less']
})

export class AddPlaylistComponent implements OnInit {

  constructor(private readonly apiService: APIService) { }

  public playlistForm!: FormGroup;
  public pending = false;

  get playlistId(): AbstractControl | null {
    return this.playlistForm.get('playlistId');
  }

  get loop(): AbstractControl | null {
    return this.playlistForm.get('loop');
  }
  get shuffle(): AbstractControl | null {
    return this.playlistForm.get('shuffle');
  }
  get replaceAll(): AbstractControl | null {
    return this.playlistForm.get('replaceAll');
  }

  ngOnInit(): void {
    this.playlistForm = new FormGroup({
      playlistId: new FormControl('', Validators.required),
      loop: new FormControl(false),
      shuffle: new FormControl(false),
      replaceAll: new FormControl(false)
    });
  }

  public async onSubmit(): Promise<void> {
    this.pending = true;

    const model: PlaylistFormModel = {
      id: this.playlistId?.value,
      loop: this.loop?.value,
      shuffle: this.shuffle?.value,
      replaceAll: this.replaceAll?.value
    };

    this.apiService.addPlaylist(model)
      .catch((error) => console.log(error.message))
      .finally(() =>
        this.pending = false
      );
  }
}
