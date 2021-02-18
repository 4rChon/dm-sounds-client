import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('shuffle', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/shuffle/v11/24px.svg'));
    iconRegistry.addSvgIcon('no-shuffle', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/shuffle_on/v10/24px.svg'));
    iconRegistry.addSvgIcon('skip-next', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/skip_next/v10/24px.svg'));
    iconRegistry.addSvgIcon('skip-previous', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/skip_previous/v10/24px.svg'));
    iconRegistry.addSvgIcon('loop', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/loop/v9/24px.svg'));
    iconRegistry.addSvgIcon('handle', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/drag_handle/v11/24px.svg'));
    iconRegistry.addSvgIcon('eject', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialicons/eject/v8/24px.svg'));
    iconRegistry.addSvgIcon('replace', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialicons/multiple_stop/v5/24px.svg'));
  }
}
