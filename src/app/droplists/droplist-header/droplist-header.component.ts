import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { Droplist } from '..';
import { DroplistService } from '../droplist.service';

@Component({
  selector: 'app-droplist-header',
  templateUrl: './droplist-header.component.html',
  styleUrls: ['./droplist-header.component.less']
})
export class DroplistHeaderComponent implements OnInit, OnDestroy {
  @Input() index!: number;
  @Input() editing = false;

  public editDockTooltip = TooltipConstants.EditDock;
  public deleteDockTooltip = TooltipConstants.DeleteDock;
  public editDockDoneTooltip = TooltipConstants.EditDockDone;

  public name = new FormControl('');

  private droplist!: Droplist;
  private valueChangeSubscription!: Subscription;

  constructor(private readonly droplistService: DroplistService) { }

  ngOnInit(): void {
    this.droplist = this.droplistService.getDroplist(this.index);
    this.name.setValue(this.droplist.name);
    this.valueChangeSubscription = this.name.valueChanges.subscribe(value => {
      this.droplist.name = value;
    });
  }

  ngOnDestroy(): void {
    this.valueChangeSubscription?.unsubscribe();
  }

  public onDelete(): void {
    this.droplistService.removeDroplist(this.index);
  }
}
