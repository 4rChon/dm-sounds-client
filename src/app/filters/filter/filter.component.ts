import { Component, Input, OnInit } from '@angular/core';
import { ColourService } from '../../common/colour.service';
import { FilterViewModel } from '../filter.view-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {
  public colour!: any;
  @Input() filter!: FilterViewModel;

  public ngOnInit(): void {
    this.colour = ColourService.RGBtoCSS(this.filter.colour);
  }
}
