import { Component } from '@angular/core';
import { IconService } from './common/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private readonly iconService: IconService) { }

  title = 'dm-sounds';
}
