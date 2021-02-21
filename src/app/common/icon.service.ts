import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {
  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    this.addIcon('shuffle', 'https://fonts.gstatic.com/s/i/materialiconsround/shuffle/v11/24px.svg');
    this.addIcon('no-shuffle', 'https://fonts.gstatic.com/s/i/materialiconsround/shuffle_on/v10/24px.svg');
    this.addIcon('skip-next', 'https://fonts.gstatic.com/s/i/materialiconsround/skip_next/v10/24px.svg');
    this.addIcon('skip-previous', 'https://fonts.gstatic.com/s/i/materialiconsround/skip_previous/v10/24px.svg');
    this.addIcon('loop', 'https://fonts.gstatic.com/s/i/materialiconsround/loop/v9/24px.svg');
    this.addIcon('handle', 'https://fonts.gstatic.com/s/i/materialiconsround/drag_handle/v11/24px.svg');
    this.addIcon('eject', 'https://fonts.gstatic.com/s/i/materialicons/eject/v8/24px.svg');
    this.addIcon('replace', 'https://fonts.gstatic.com/s/i/materialicons/multiple_stop/v5/24px.svg');
    this.addIcon('add', 'https://fonts.gstatic.com/s/i/materialiconsround/add/v12/24px.svg');
  }

  private addIcon(name: string, url: string): void {
    this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }
}
