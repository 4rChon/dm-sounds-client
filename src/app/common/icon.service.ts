import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIcon('shuffle', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/shuffle/v11/24px.svg'));
    iconRegistry.addSvgIcon('no-shuffle', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/shuffle_on/v10/24px.svg?download=true'));
    iconRegistry.addSvgIcon('skip-next', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/skip_next/v10/24px.svg'));
    iconRegistry.addSvgIcon('skip-previous', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/skip_previous/v10/24px.svg'));
    iconRegistry.addSvgIcon('loop', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/loop/v9/24px.svg'));
    iconRegistry.addSvgIcon('handle', sanitizer.bypassSecurityTrustResourceUrl('https://fonts.gstatic.com/s/i/materialiconsround/drag_handle/v11/24px.svg?download=true'));
  }
}
