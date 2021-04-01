import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {
  private sourceUrl = 'https://fonts.gstatic.com/s/i/materialiconsround/';

  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    this.addIcon('add', 'add/v12/24px.svg');
    this.addIcon('delete', '/delete/v12/24px.svg');
    this.addIcon('eject', 'eject/v8/24px.svg');
    this.addIcon('edit', 'edit/v10/24px.svg');
    this.addIcon('handle', 'drag_handle/v11/24px.svg');
    this.addIcon('loop', 'loop/v9/24px.svg');
    this.addIcon('play', 'play_arrow/v10/24px.svg');
    this.addIcon('repeat', 'repeat/v10/24px.svg');
    this.addIcon('repeat_one', 'repeat_one/v10/24px.svg');
    this.addIcon('replace', 'multiple_stop/v5/24px.svg');
    this.addIcon('shuffle', 'shuffle/v11/24px.svg');
    this.addIcon('skip-next', 'skip_next/v10/24px.svg');
    this.addIcon('skip-previous', 'skip_previous/v10/24px.svg');
    this.addIcon('volumeMute', 'volume_mute/v10/24px.svg');
    this.addIcon('volumeDown', 'volume_down/v10/24px.svg');
    this.addIcon('volumeUp', 'volume_up/v10/24px.svg');
    this.addIcon('check', 'check/v13/24px.svg');
    this.addIcon('clear', 'clear/v10/24px.svg');
  }

  private addIcon(name: string, resource: string): void {
    this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(`${this.sourceUrl}${resource}`));
  }
}
